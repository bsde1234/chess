/*
 * A free and open source chess game using AssemblyScript and React
 * Copyright (C) 2020 mhonert (https://github.com/mhonert)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React, { useState } from 'react';
import styled from 'styled-components/macro';

import engineWorkerLoader from 'workerize-loader!../engine/engine.worker'; // eslint-disable-line import/no-webpack-loader-syntax
import { B, BLACK, K, N, P, Q, R, WHITE } from '../engine/constants';
import Board from './Board';
import GameMenu from './GameMenu';
import engine, { Move } from '../engine/engine-wasm-interop';

const engineWebWorker = engineWorkerLoader();

const initialState = 0;

const initialBoard = [
 -R, -N, -B, -Q, -K, -B, -N, -R,
 -P, -P, -P, -P, -P, -P, -P, -P,
  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,
  0,  0,  0,  0,  0,  0,  0,  0,
  P,  P,  P,  P,  P,  P,  P,  P,
  R,  N,  B,  Q,  K,  B,  N,  R,
  0, 0, initialState
];

const GameArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Game = () => {
  const [rotateBoard, setRotateBoard] = useState(false);
  const [activePlayer, setActivePlayer] = useState(WHITE);
  const [humanPlayerColor, setHumanPlayerColor] = useState(WHITE);
  const [isAiThinking, setAiThinking] = useState(false);
  const [board, setBoard] = useState(initialBoard);
  const [gameEnded, setGameEnded] = useState(false);
  const [lastMove, setLastMove] = useState({ start: -1, end: -1 });
  const [availableMoves, setAvailableMoves] = useState(engine.generateMoves(board, activePlayer));
  const [currentPieceMoves, setCurrentPieceMoves] = useState(new Set());
  const [winningPlayer, setWinningPlayer] = useState();
  const [difficultyLevel, setDifficultyLevel] = useState(3);
  const [previousMoveState, setPreviousMoveState] = useState();

  const clearAvailableMoves = () => setAvailableMoves([]);

  const nextPlayer = playerColor => -playerColor;

  const handleAIMove = (board, move, aiColor) => {
    setAiThinking(false);

    setLastMove(move);

    const newBoard = engine.performMove(board, move);
    setBoard(newBoard);

    if (engine.isCheckMate(newBoard, -aiColor)) {
      setGameEnded(true);
      setWinningPlayer(aiColor);

      return;
    }

    const availablePlayerMoves = engine.generateMoves(newBoard, -aiColor);
    setAvailableMoves(availablePlayerMoves);

    if (availablePlayerMoves.length === 0) {
      setGameEnded(true);

      return;
    }

    setActivePlayer(nextPlayer(aiColor));
  };

  const canMove = (start, end) => {
    return availableMoves.some(
      move => move.start === start && move.end === end
    );
  };

  const switchSides = () => {
    setRotateBoard(true);
    setAiThinking(true);
    setHumanPlayerColor(-humanPlayerColor);
    engineWebWorker
      .calculateMove(board, activePlayer, difficultyLevel)
      .then(move => handleAIMove(board, move, activePlayer));
  };

  const startNewGame = () => {
    engineWebWorker.newGame()
      .then(() => {
        setRotateBoard(false);
        setPreviousMoveState(undefined);
        setBoard(initialBoard);
        setActivePlayer(WHITE);
        setHumanPlayerColor(WHITE);
        setGameEnded(false);
        setLastMove({ start: -1, end: -1 });
        setWinningPlayer(undefined);
        setAvailableMoves(engine.generateMoves(initialBoard, WHITE));
        setCurrentPieceMoves(new Set());
      });
  };

  const undoMove = () => {
    const {previousBoard, previousLastMove, previousActivePlayer, previousAvailableMoves} = previousMoveState;
    setBoard(previousBoard);
    setLastMove(previousLastMove);
    setActivePlayer(previousActivePlayer)
    setAvailableMoves(previousAvailableMoves);

    setPreviousMoveState(undefined);
  }

  const saveCurrentMoveState = () => {
    setPreviousMoveState({
      previousBoard: board,
      previousLastMove: lastMove,
      previousActivePlayer: activePlayer,
      previousAvailableMoves: availableMoves
    })
  }

  const handlePlayerMove = (piece, start, end) => {
    let pieceId = Math.abs(piece);
    if (gameEnded || isAiThinking) {
      return;
    }

    if (!canMove(start, end)) {
      return;
    }

    saveCurrentMoveState();
    setLastMove({ start, end });

    // TODO: Replace browser prompt dialog with own dialog
    if (pieceId === P && ((activePlayer === WHITE && end < 8) || (activePlayer === BLACK && end >= 56))) {
      // Promotion
      const choice = prompt('Choose promotion (Q, R, B, K)', 'Q');
      switch (choice.toUpperCase()) {
        case 'R':
          pieceId = R;
          break;
        case 'B':
          pieceId = B;
          break;
        case 'K':
          pieceId = K;
          break;
        case 'Q':
        default:
          pieceId = Q;
          break;
      }
    }

    const newBoard = engine.performMove(board, new Move(pieceId, start, end));
    setBoard(newBoard);

    if (engine.isCheckMate(newBoard, -activePlayer)) {
      setGameEnded(true);
      setWinningPlayer(activePlayer);

      return;
    }

    const moves = engine.generateMoves(newBoard, -activePlayer);

    if (moves.length === 0) {
      setGameEnded(true);
      return;
    }

    setAiThinking(true);
    clearAvailableMoves();
    engineWebWorker
      .calculateMove(newBoard, -activePlayer, difficultyLevel)
      .then(move => handleAIMove(newBoard, move, -activePlayer));

    setActivePlayer(-activePlayer);
  };

  const updatePossibleMoves = start => {
    const possibleMoves = availableMoves
      .filter(move => move.start === start)
      .map(move => move.end);
    setCurrentPieceMoves(new Set(possibleMoves));
  };

  const clearPossibleMoves = () => {
    setCurrentPieceMoves(new Set());
  };

  return (
    <GameArea>
      <Board
        board={board}
        isRotated={rotateBoard}
        lastMove={lastMove}
        currentPieceMoves={currentPieceMoves}
        handlePlayerMove={handlePlayerMove}
        updatePossibleMoves={updatePossibleMoves}
        clearPossibleMoves={clearPossibleMoves}
      />
      <GameMenu
        isAiThinking={isAiThinking}
        firstMovePlayed={lastMove.start !== -1}
        humanPlayerColor={humanPlayerColor}
        gameEnded={gameEnded}
        winningPlayerColor={winningPlayer}
        startNewGame={startNewGame}
        switchSides={switchSides}
        rotateBoard={() => setRotateBoard(!rotateBoard)}
        difficultyLevel={difficultyLevel}
        setDifficultyLevel={setDifficultyLevel}
        canUndoMove={!!previousMoveState}
        undoMove={undoMove}
      />
    </GameArea>
  );
};

export default Game;