import { createContext, useEffect, useState } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState(() => {
    return JSON.parse(localStorage.getItem("chatHistory")) || [];
  });
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(prevPrompts));
  }, [prevPrompts]);

  const onSent = async (prompt) => {
    if (!prompt) return;

    setRecentPrompt(prompt);
    setShowResult(true);
    setLoading(true);
    setResultData("");

    setPrevPrompts(prev =>
      prev.includes(prompt) ? prev : [prompt, ...prev]
    );

    try {
      const response = await main(prompt);
      setResultData(response);
    } catch {
      setResultData("An error occurred while fetching the response.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const newChat = () => {
    setShowResult(false);
    setResultData("");
    setRecentPrompt("");
  };

  const clearHistory = () => {
    setPrevPrompts([]);
    localStorage.removeItem("chatHistory");
    newChat();
  };

  return (
    <Context.Provider
      value={{
        input,
        setInput,
        recentPrompt,
        prevPrompts,
        onSent,
        newChat,
        clearHistory,
        loading,
        showResult,
        resultData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
