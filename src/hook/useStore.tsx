import { useContext } from "react";
import { Context } from "../store/context";
const useStore = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("MyComponent must be used within a ContextProvider");
  }
  return context;
};
export { useStore };
