import {
  WIN,
  TURN,
  P_ONE,
  P_TWO,
  X_SIGN,
  O_SIGN,
  DRAW,
  EMPTY
} from "../constants";
import update from "react-addons-update";

const initialState = {
  values: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  pOneWins: 0,
  pTwoWins: 0,
  turn: P_ONE
};
function rootReducer(state = initialState, action) {
  if (action.type === WIN) {
    if (action.sign === X_SIGN) {
      return Object.assign({}, state, {
        pOneWins: state.pOneWins + 1,
        values: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
        turn: P_TWO
      });
    }
    if (action.sign === O_SIGN) {
      return Object.assign({}, state, {
        pTwoWins: state.pTwoWins + 1,
        values: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
        turn: P_ONE
      });
    }
    if (action.sign === DRAW) {
      return Object.assign({}, state, {
        values: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
      });
    }
  }
  if (action.type === TURN) {
    if (state.values[action.index] === EMPTY) {
      if (action.currentPlayer === P_ONE) {
        return update(state, {
          turn: { $set: P_TWO },
          values: { [action.index]: { $set: X_SIGN } }
        });
      }
      if (action.currentPlayer === P_TWO) {
        return update(state, {
          turn: { $set: P_ONE },
          values: { [action.index]: { $set: O_SIGN } }
        });
      }
    }
  }
  return state;
}
export default rootReducer;
