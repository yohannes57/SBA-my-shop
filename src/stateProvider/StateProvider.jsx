import { Children } from "react";
import { createContext } from "react";

export const stateContext = createContext();

export default function StateProvider(Children) {
  <StateProvider.Provider>{Children}</StateProvider.Provider>;
}
