import { createContext } from "react";

const initialState = {
  user: null,
};

export const MovieContext = createContext(initialState);
