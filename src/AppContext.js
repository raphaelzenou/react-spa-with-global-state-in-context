import React from "react";

export const AppProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "plus":
        return { ...state, clicks: state.clicks++ };
      default:
        return state;
    }
  };

  const [appData, appDispatch] = React.useReducer(reducer, {
    clicks: 0,
  });

  return (
    <AppContext.Provider value={{ appData, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = React.createContext({});
