import { ACTIONS } from "./action";

export const initialState = {};

export const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    default:
      return {
        ...state,
      };
  }
};
