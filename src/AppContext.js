import React from "react";

export const AppProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add-ship":
        return { ...state, fleet: [...state.fleet, action.payload] };
      case "delete-ship":
        const newFleet = [...state.fleet];
        newFleet.splice(action.payload, 1);
        return { ...state, fleet: newFleet };
      case "add-result":
        return { ...state, latestResult: action.payload };
      default:
        return state;
    }
  };

  const [appData, appDispatch] = React.useReducer(reducer, {
    fleet: [],
    latestResult: [],
  });

  return (
    <AppContext.Provider value={{ appData, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = React.createContext({});
