import React, { useEffect, useState } from "react";

const StatusContext = React.createContext({
  screen: "",
  destinationStatus: "",
  crewStatus: "",
  tech: "",
  setScreen: (input: string) => {},
  setDestination: (input: string) => {},
  setCrew: (input: string) => {},
  setTechnology: (input: string) => {},
});

export const StatusContextProvider: React.FC = (props) => {
  const [destination, setDestination] = useState("moon");
  const [screen, setScreen] = useState("home");
  const [crewMember, setCrewMember] = useState("Douglas");
  const [technology, setTechnology] = useState("launch");

  const setDestinationHandler = (input: string) => {
    setDestination(input);
  };

  const setScreenHandler = (input: string) => {
    setScreen(input);
  };

  const setCrewHandler = (input: string) => {
    setCrewMember(input);
  };
  const setTechHandler = (input: string) => {
    setTechnology(input);
  };

  return (
    <StatusContext.Provider
      value={{
        screen: screen,
        destinationStatus: destination,
        crewStatus: crewMember,
        tech: technology,
        setScreen: setScreenHandler,
        setDestination: setDestinationHandler,
        setCrew: setCrewHandler,
        setTechnology: setTechHandler,
      }}
    >
      {props.children}
    </StatusContext.Provider>
  );
};

export default StatusContext;
