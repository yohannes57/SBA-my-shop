import { useReducer,useContext,createContext } from "react";

export const stateContext = createContext();

export default function StateProvider({reducer,initialState,Children}) {
  return(
<stateContext.Provider value={useReducer(reducer,initialState)}>
  {Children}
  </stateContext.Provider>
  )
  
}

export const useStateFromContext=()=>useContext(stateContext)