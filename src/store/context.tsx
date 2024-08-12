import { createContext } from "react";
import data from "../../data.json";
import { ActionCount, indexType } from "../index.ts";

export const initialState =
  JSON.parse(localStorage.getItem("state") || "null") || data;

export const Context = createContext<{
  state: indexType;
  dispatch?: React.Dispatch<ActionCount>;
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
} | null>(null);
