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

export const PAWN: i32 = 1;
export const KNIGHT: i32 = 2;
export const BISHOP: i32 = 3;
export const ROOK: i32 = 4;
export const QUEEN: i32 = 5;
export const KING: i32 = 6;

const KING_VALUE = 1200;
export const QUEEN_VALUE = 950;
export const ROOK_VALUE = 500;
export const BISHOP_VALUE = 330;
export const KNIGHT_VALUE = 320;
export const PAWN_VALUE = 100;

export const PIECE_VALUES: StaticArray<i32> = StaticArray.fromArray([PAWN_VALUE, KNIGHT_VALUE, BISHOP_VALUE, ROOK_VALUE, QUEEN_VALUE, KING_VALUE]);

export const P = PAWN;
export const N = KNIGHT;
export const B = BISHOP;
export const R = ROOK;
export const Q = QUEEN;
export const K = KING;

export const KNIGHT_DIRECTIONS: StaticArray<i32> = StaticArray.fromArray([17, 15, 10, 6, -10, -6, -15, -17]);
export const KING_DIRECTIONS: StaticArray<i32> = StaticArray.fromArray([1, 8, -1, -8, 7, 9, -7, -9]);

export const BISHOP_DIRECTIONS: StaticArray<i32> = StaticArray.fromArray([-7, -9, 7, 9]);
export const ROOK_DIRECTIONS: StaticArray<i32> = StaticArray.fromArray([-1, -8, 1, 8]);

export const WHITE_LEFT_ROOK_START = 56;
export const WHITE_RIGHT_ROOK_START = 63;
export const BLACK_LEFT_ROOK_START = 0;
export const BLACK_RIGHT_ROOK_START = 7;

export const WHITE_PAWNS_BASELINE_START = 48;
export const WHITE_PAWNS_BASELINE_END = 55;
export const BLACK_PAWNS_BASELINE_START = 8;
export const BLACK_PAWNS_BASELINE_END = 15;

export const WHITE_ENPASSANT_LINE_START = 16;
export const WHITE_ENPASSANT_LINE_END = 23
export const BLACK_ENPASSANT_LINE_START = 40;
export const BLACK_ENPASSANT_LINE_END = 47


