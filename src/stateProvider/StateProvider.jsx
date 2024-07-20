import { useReducer, useContext, createContext } from "react";

export const stateContext = createContext();

export default function StateProvider({ reducer, initialState, children }) {
  return (
    <stateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </stateContext.Provider>
  );
}

export const useStateFromContext = () => useContext(stateContext);
