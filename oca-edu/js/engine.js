// GameEngine contiene la lógica principal del juego.
// Documenta aquí los efectos de las casillas especiales.
// queso: salta a la siguiente de queso y repite tirada
// rueda: salta a la siguiente rueda y repite tirada
// dados: repite tirada
// pozo: pierde 1 turno
// laberinto: retrocede al laberinto anterior o -3
// carcel: pierde 2 turnos
// barca: avanza al siguiente cruce
// gato: vuelve al inicio de la isla
// volcan: retrocede hasta la última casilla normal
// arbol: casilla neutra

import { renderBoard } from "./board.js";
export function createDefaultBoard(){
  const board = Array(51).fill('normal');
  const set = (arr,type) => arr.forEach(p=>board[p]=type);
  set([6,12,18,24,30,36,42,48],'queso');
  set([9,27],'rueda');
  set([10,20,40],'dados');
  set([31],'pozo');
  set([28,41],'laberinto');
  set([26],'carcel');
  set([14],'barca');
  set([34],'gato');
  set([35],'volcan');
  set([2,5,15,22,33,45],'arbol');
  set([7,11,16,19,23,29,32,37,44],'pregunta');
  set([50],'meta');
  return board.map((type,pos)=>pos===0?null:{pos,type});
}

export class GameEngine {
  constructor(){
    this.board = createDefaultBoard();
  }
  init(){
    // punto de entrada del juego
    const container = document.getElementById('game');
    renderBoard(container, this.board);
  }
  levelForPos(pos){
    if(pos<=16) return 1;
    if(pos<=33) return 2;
    return 3;
  }
}
