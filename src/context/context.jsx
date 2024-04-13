import { createContext, useState } from "react";
import runChat from "../Config/gemini";
export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState("");
  const [loading, setLoading] = useState(false);
  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    const response = await runChat(input);
    setResultData(response);
    setLoading(false);
    setShowResult(true);
    setRecentPrompt(input);

    setInput("");
  };
  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    input,
    setInput,
    showResult,
    resultData,
    loading,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
