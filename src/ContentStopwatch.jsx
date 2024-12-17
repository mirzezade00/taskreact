import React, { createContext, useContext, useState } from "react";

const ContentStopwatch = createContext();

export const useStopwatch = () => {
  const context = useContext(ContentStopwatch);
  if (!context) {
    throw new Error("useStopwatch must be used within a StopwatchProvider");
  }
  return context;
};

export const StopwatchProvider = ({ children }) => {
  const [seconds, setSeconds] = useState(0);
  const [run, setRun] = useState(false);

  return (
    <ContentStopwatch.Provider value={{ seconds, setSeconds, run, setRun }}>
      {children}
    </ContentStopwatch.Provider>
  );
};