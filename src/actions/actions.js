import { RESTART, WIN, TURN, PREV, NEXT } from "../constants";

export function playerWin(sign) {
  return { type: WIN, sign };
}

export function changeTurn(currentPlayer, index) {
  return { type: TURN, currentPlayer, index };
}
export function restart() {
  return { type: RESTART };
}

export function prevAction() {
  return { type: PREV };
}

export function nextAction() {
  return { type: NEXT };
}
