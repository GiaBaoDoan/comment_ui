import React, { useReducer, useState } from "react";
import { Context, initialState } from "./context.tsx";
import countReducer from "./countReducer.tsx";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <Context.Provider value={{ state, dispatch, isEdit, setIsEdit }}>
      {children}
    </Context.Provider>
  );
};
