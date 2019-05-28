import { PREV, NEXT, RESTART, WIN } from "../constants";

function undoable(reducer) {
  const initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: []
  };

  return function(state = initialState, action) {
    const { past, present, future } = state;

    switch (action.type) {
      case PREV:
        const previous = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);
        return {
          past: newPast,
          present: previous,
          future: [present, ...future]
        };
      case NEXT:
        const next = future[0];
        const newFuture = future.slice(1);
        return {
          past: [...past, present],
          present: next,
          future: newFuture
        };
      case RESTART:
        return {
          past: [],
          present: reducer(undefined, {}),
          future: []
        };
      case WIN:
        const newGamePresent = reducer(present, action);
        return {
          past: [],
          present: newGamePresent,
          future: []
        };

      default:
        const newPresent = reducer(present, action);
        if (present === newPresent) {
          return state;
        }
        return {
          past: [...past, present],
          present: newPresent,
          future: []
        };
    }
  };
}

export default undoable;
