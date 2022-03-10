import React, { useState } from "react";

const StatusContext = React.createContext({
  screen: "",
  destinationStatus: "",
  setScreen: (input: string) => {},
  setDestination: (input: string) => {},
});

export const StatusContextProvider: React.FC = (props) => {
  const [destination, setDestination] = useState("moon");
  const [screen, setScreen] = useState("home");

  const setDestinationHandler = (input: string) => {
    setDestination(input);
  };

  const setScreenHandler = (input: string) => {
    setScreen(input);
  };

  return (
    <StatusContext.Provider
      value={{
        screen: screen,
        setScreen: setScreenHandler,
        destinationStatus: destination,
        setDestination: setDestinationHandler,
      }}
    >
      {props.children}
    </StatusContext.Provider>
  );
};

export default StatusContext;
