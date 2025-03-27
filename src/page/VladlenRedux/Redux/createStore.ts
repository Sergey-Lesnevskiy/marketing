import { configureStore } from "@reduxjs/toolkit";
import { DECREMENT, INCREMENT } from "./type";

type CounterState = {
  counter: number;
};
export type CounterId = string;
type State = {
  counters: Record<CounterId, CounterState | undefined>;
};
export type IncrementAction = {
  type: "INCREMENT";
  payload: {
    counterId: CounterId;
  };
};
export type DecrementAction = {
  type: "DECREMENT";
  payload: {
    counterId: CounterId;
  };
};
type Action = IncrementAction | DecrementAction;
const initialCounterState: CounterState = { counter: 0 };
export const initialState: State = {
  counters: {},
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case INCREMENT: {
      const { counterId } = action.payload;
      const currentCounter = state.counters[counterId] ?? initialCounterState;
      return {
        ...state,
        counters: {
          ...state.counters,
          [counterId]: {
            ...currentCounter,
            counter: currentCounter.counter + 1,
          },
        },
      };
    }
    case DECREMENT: {
      const { counterId } = action.payload;
      const currentCounter = state.counters[counterId] ?? initialCounterState;
      return {
        ...state,
        counters: {
          ...state.counters,
          [counterId]: {
            ...currentCounter,
            counter: currentCounter.counter - 1,
          },
        },
      };
    }
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: reducer,
});


export type AppState = ReturnType<typeof store.getState>