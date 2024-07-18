import { Children } from "react";
import { createContext } from "react";

export const stateContext = createContext();

export default function StateProvider(Children,intailValue) {
  <StateProvider.Provider value={intailValue}>{Children}</StateProvider.Provider>;
}
