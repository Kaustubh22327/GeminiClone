import { createContext } from "react";
export const Context = createContext();
const ContextProvider = (props) => {
  const contextValue = {};
  return (
    <Context.Provider value={contextvalue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
