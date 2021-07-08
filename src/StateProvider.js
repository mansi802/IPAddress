import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// set the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//helps to pull out data
export const useStateValue = () => useContext(StateContext);
