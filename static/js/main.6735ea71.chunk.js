(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{24:function(e,n,t){var a=t(55),r=["calculateMove"];e.exports=function(){var e=new Worker(t.p+"3d1b17ab5491e8dc22b1.worker.js",{name:"[hash].worker.js"});return a(e,r),e}},29:function(e,n,t){e.exports=t.p+"static/media/white_pawn.41da1b5b.svg"},30:function(e,n,t){e.exports=t.p+"static/media/black_pawn.3cab4671.svg"},31:function(e,n,t){e.exports=t.p+"static/media/white_knight.3ece5029.svg"},32:function(e,n,t){e.exports=t.p+"static/media/black_knight.88ad52be.svg"},33:function(e,n,t){e.exports=t.p+"static/media/white_bishop.36a96cf8.svg"},34:function(e,n,t){e.exports=t.p+"static/media/black_bishop.341337f4.svg"},35:function(e,n,t){e.exports=t.p+"static/media/white_rook.007b43f5.svg"},36:function(e,n,t){e.exports=t.p+"static/media/black_rook.e7f61dec.svg"},37:function(e,n,t){e.exports=t.p+"static/media/white_queen.51d538db.svg"},38:function(e,n,t){e.exports=t.p+"static/media/black_queen.87612c77.svg"},39:function(e,n,t){e.exports=t.p+"static/media/white_king.9e716b1e.svg"},40:function(e,n,t){e.exports=t.p+"static/media/black_king.12ae1430.svg"},48:function(e,n,t){e.exports=t(65)},54:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var a=t(5),r=t.n(a),i=t(10),o=t(0),c=t.n(o),s=t(23),l=t.n(s),u=(t(54),t(3)),d=t(2),m=t(24),p=t.n(m),f=t(68),h=d.a.div.withConfig({displayName:"Field__FieldDiv",componentId:"l5smif-0"})(["position:relative;&:nth-child(even){background-color:#f8f5df;}&.move-mark:before{position:absolute;top:4%;left:4%;bottom:4%;right:4%;content:'';display:block;border:0.5vh solid ",";border-radius:50%;}"],(function(e){return e.markColor})),g=function(e){var n=e.boardIndex,t=e.children,a=e.movePiece,r=e.isStart,i=e.isEnd,o=e.isPossibleTarget,s=Object(f.a)({accept:"PIECE",drop:function(e,t){a(e.pieceId,e.boardIndex,n)}}),l=Object(u.a)(s,2)[1],d=r||i||o?"move-mark":"",m=o?"#80fa72":r?"lightpink":i?"salmon":"white";return c.a.createElement(h,{ref:l,style:{position:"relative"},isStart:r,markColor:m,className:d},t)},v=t(69),b=t(29),w=t.n(b),_=t(30),k=t.n(_),y=t(31),M=t.n(y),x=t(32),E=t.n(x),j=t(33),I=t.n(j),O=t(34),C=t.n(O),A=t(35),P=t.n(A),D=t(36),N=t.n(D),S=t(37),G=t.n(S),R=t(38),T=t.n(R),B=t(39),z=t.n(B),K=t(40),Q=t.n(K),Y=[w.a,M.a,I.a,P.a,G.a,z.a],q=[k.a,E.a,C.a,N.a,T.a,Q.a],F=["Pawn","Knight","Bishop","Rook","Queen","King"],J=d.a.div.withConfig({displayName:"Piece__PieceContainer",componentId:"xjorig-0"})(["-webkit-transform:translate3d(0,0,0);"]),L=d.a.img.withConfig({displayName:"Piece__PieceImage",componentId:"xjorig-1"})(["display:block;margin:13%;height:74%;width:74%;&.dragging{visibility:hidden;}"]),W=function(e){var n=e.boardIndex,t=e.color,a=e.piece,r=e.onPickup,i=e.onDrop,o=Math.abs(a),s="black"===t?q[o-1]:Y[o-1],l=Object(v.a)({item:{type:"PIECE",pieceId:o,boardIndex:n},begin:function(e){return r(n)},end:function(e){return i(n)},collect:function(e){return{isDragging:!!e.isDragging()}}}),d=Object(u.a)(l,2),m=d[0].isDragging,p=d[1];return c.a.createElement(J,{ref:p},c.a.createElement(L,{src:s,alt:F[o-1],className:m?"dragging":""}))},U=d.a.div.withConfig({displayName:"Board__BoardGrid",componentId:"sc-1rho0e0-0"})(["display:grid;grid-template-columns:0 repeat(8,1fr);grid-template-rows:0 repeat(8,1fr);border-right:1px solid salmon;@media (min-aspect-ratio:99/100){width:100vh;height:100vh;}@media (max-aspect-ratio:100/99){width:100vw;height:100vw;}"]),H=function(e){var n=e.board,t=e.lastMove,a=e.currentPieceMoves,r=e.handlePlayerMove,i=e.updatePossibleMoves,o=e.clearPossibleMoves;return c.a.createElement(U,null,n.map((function(e,n){return n%10===9||n>=100||n<10?null:99===e?c.a.createElement("div",{key:n,className:"board_frame"}):c.a.createElement(g,{key:n,boardIndex:n,movePiece:r,isStart:n===t.start,isEnd:n===t.end,isPossibleTarget:a.has(n)},0!==e&&c.a.createElement(W,{boardIndex:n,color:e<0?"black":"white",piece:e,onPickup:i,onDrop:o}))})))},V=t(41);function X(){var e=Object(V.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return X=function(){return e},e}var Z=d.a.div.withConfig({displayName:"GameMenu__MenuBar",componentId:"sc-1evhkun-0"})(["display:flex;flex-direction:column;margin:1rem;text-align:center;@media (max-aspect-ratio:100/99){width:100%;}"]),$=d.a.div.withConfig({displayName:"GameMenu__MenuItem",componentId:"sc-1evhkun-1"})(["position:relative;display:",";align-self:center;padding-bottom:0.5rem;"],(function(e){return e.hidden?"none":"flex"})),ee=d.a.button.withConfig({displayName:"GameMenu__GameButton",componentId:"sc-1evhkun-2"})(["background:none;border:1px solid salmon;border-radius:0.5rem;color:salmon;font-size:1rem;font-weight:bold;padding:0.5rem;width:11rem;&:hover{background:salmon;color:white;cursor:pointer;}"]),ne=d.a.label.withConfig({displayName:"GameMenu__Label",componentId:"sc-1evhkun-3"})(["position:absolute;top:1.3rem;width:100%;text-align:center;font-size:0.8rem;color:gray;"]),te=Object(d.a)($).withConfig({displayName:"GameMenu__ThinkingIndicator",componentId:"sc-1evhkun-4"})(["font-weight:bold;margin-left:1rem;font-size:1rem;text-align:center;color:salmon;"]),ae=Object(d.b)(X()),re=d.a.div.withConfig({displayName:"GameMenu__AnimatedDualRing",componentId:"sc-1evhkun-5"})(["display:inline-block;width:128px;height:128px;&:after{content:' ';display:block;width:80px;height:80px;margin:8px;border-radius:50%;border:6px solid salmon;border-color:salmon transparent salmon transparent;animation:"," 1.2s linear infinite;}"],ae),ie=Object(d.a)($).withConfig({displayName:"GameMenu__GameResult",componentId:"sc-1evhkun-6"})(["padding-top:2rem;font-weight:bold;font-size:1.5rem;color:salmon;"]),oe=function(e){var n=e.isAiThinking,t=e.gameEnded,a=e.winningPlayerColor,r=e.startNewGame,i=e.forceAiMove,o=e.searchDepth,s=e.setSearchDepth;return c.a.createElement(Z,null,c.a.createElement($,{hidden:n},c.a.createElement(ee,{disabled:n,onClick:r},"New Game")),c.a.createElement($,{hidden:n||t},c.a.createElement(ee,{disabled:n||t,onClick:i,title:"Let computer play the current color"},"Computer Move")),c.a.createElement($,{hidden:n},c.a.createElement(ne,{htmlFor:"game-menu_difficulty-slider"},"Difficulty"),c.a.createElement("input",{id:"game-menu_difficulty-slider",type:"range",min:"4",max:"6",title:"Difficulty",value:o,onChange:function(e){return s(e.target.value)}})),n&&c.a.createElement(te,null,c.a.createElement(re,null,"Thinking ...")),t&&c.a.createElement(ie,null,a?(1===a?"White":"Black")+" wins!":"Stalemate!"))},ce=t(19),se=t(20),le=t(42),ue=function(){function e(){Object(ce.a)(this,e)}return Object(se.a)(e,[{key:"init",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.engine){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Object(le.instantiate)(fetch("./as-api.wasm"));case 4:this.engine=e.sent,console.log("Engine initialized");case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"calculateMove",value:function(e,n,t){console.log("Start calculation of move ...");var a=this.engine.__allocArray(this.engine.INT32ARRAY_ID,e),r=this.engine.__retain(a),i=this.engine.calculateMove(r,n,t),o=de.fromEncodedMove(i);return this.engine.__release(r),console.log("Calculation finished"),o}},{key:"performMove",value:function(e,n){var t=this.engine.__allocArray(this.engine.INT32ARRAY_ID,e),a=this.engine.__retain(t),r=this.engine.performMove(a,n.encodedMove),i=this.engine.__getArray(r);return this.engine.__release(a),this.engine.__release(r),i}},{key:"generateMoves",value:function(e,n){var t=this.engine.__allocArray(this.engine.INT32ARRAY_ID,e),a=this.engine.__retain(t),r=this.engine.generatePlayerMoves(a,n),i=this.engine.__getArray(r);return this.engine.__release(r),this.engine.__release(a),i.map(de.fromEncodedMove)}},{key:"isCheckMate",value:function(e,n){var t=this.engine.__allocArray(this.engine.INT32ARRAY_ID,e),a=this.engine.__retain(t),r=this.engine.isCheckMate(a,n);return this.engine.__release(a),r}}]),e}(),de=function(){function e(n,t,a){Object(ce.a)(this,e),this.piece=n,this.start=t,this.end=a,this.encodedMove=n|t<<3|a<<10}return Object(se.a)(e,null,[{key:"fromEncodedMove",value:function(n){return new e(7&n,n>>3&127,n>>10&127)}}]),e}(),me=new ue,pe=p()(),fe=[99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,-4,-2,-3,-5,-6,-3,-2,-4,99,99,-1,-1,-1,-1,-1,-1,-1,-1,99,99,0,0,0,0,0,0,0,0,99,99,0,0,0,0,0,0,0,0,99,99,0,0,0,0,0,0,0,0,99,99,0,0,0,0,0,0,0,0,99,99,1,1,1,1,1,1,1,1,99,99,4,2,3,5,6,3,2,4,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,0],he=d.a.div.withConfig({displayName:"Game__GameArea",componentId:"qivay-0"})(["display:flex;flex-wrap:wrap;"]),ge=function(){var e=Object(o.useState)(1),n=Object(u.a)(e,2),t=n[0],a=n[1],r=Object(o.useState)(!1),i=Object(u.a)(r,2),s=i[0],l=i[1],d=Object(o.useState)(fe),m=Object(u.a)(d,2),p=m[0],f=m[1],h=Object(o.useState)(!1),g=Object(u.a)(h,2),v=g[0],b=g[1],w=Object(o.useState)({start:-1,end:-1}),_=Object(u.a)(w,2),k=_[0],y=_[1],M=Object(o.useState)(me.generateMoves(p,t)),x=Object(u.a)(M,2),E=x[0],j=x[1],I=Object(o.useState)(new Set),O=Object(u.a)(I,2),C=O[0],A=O[1],P=Object(o.useState)(),D=Object(u.a)(P,2),N=D[0],S=D[1],G=Object(o.useState)(5),R=Object(u.a)(G,2),T=R[0],B=R[1],z=function(e,n,t){l(!1),y(n);var r=me.performMove(e,n);if(f(r),me.isCheckMate(r,-t))return b(!0),void S(t);var i=me.generateMoves(r,-t);(j(i),0!==i.length)?a(-t):b(!0)};return c.a.createElement(he,null,c.a.createElement(H,{board:p,lastMove:k,currentPieceMoves:C,handlePlayerMove:function(e,n,r){var i=Math.abs(e);if(!v&&!s&&function(e,n){return E.some((function(t){return t.start===e&&t.end===n}))}(n,r)){if(y({start:n,end:r}),1===i&&(1===t&&r<29||-1===t&&r>90))switch(prompt("Choose promotion (Q, R, B, K)","Q").toUpperCase()){case"R":e=4;break;case"B":e=3;break;case"K":e=6;break;case"Q":default:e=5}var o=me.performMove(p,new de(i,n,r));if(f(o),me.isCheckMate(o,-t))return b(!0),void S(t);0!==me.generateMoves(o,-t).length?(l(!0),j([]),pe.calculateMove(o,-t,T).then((function(e){return z(o,e,-t)})),a(-t)):b(!0)}},updatePossibleMoves:function(e){var n=E.filter((function(n){return n.start===e})).map((function(e){return e.end}));A(new Set(n))},clearPossibleMoves:function(){A(new Set)}}),c.a.createElement(oe,{isAiThinking:s,gameEnded:v,winningPlayerColor:N,startNewGame:function(){f(fe),a(1),b(!1),y({start:-1,end:-1}),S(void 0),j(me.generateMoves(fe,t)),A(new Set)},forceAiMove:function(){l(!0),pe.calculateMove(p,t,T).then((function(e){return z(p,e,t)}))},searchDepth:T,setSearchDepth:B}))},ve=t(67),be=t(43),we=t(44),_e=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){var t=n.map((function(n){return n(e)}));return{setup:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.forEach((function(e){return e.setup.apply(e,n)}))},teardown:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.forEach((function(e){return e.teardown.apply(e,n)}))},connectDropTarget:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.forEach((function(e){return e.connectDropTarget.apply(e,n)}))},connectDragPreview:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.forEach((function(e){return e.connectDragPreview.apply(e,n)}))},connectDragSource:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.forEach((function(e){return e.connectDragSource.apply(e,n)}))}}}};var ke=function(){return c.a.createElement("main",null,c.a.createElement(ve.a,{backend:_e(be.a,we.a)},c.a.createElement(ge,null)))};Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me.init();case 2:l.a.render(c.a.createElement(ke,null),document.getElementById("root"));case 3:case"end":return e.stop()}}),e)})))()}},[[48,1,2]]]);
//# sourceMappingURL=main.6735ea71.chunk.js.map