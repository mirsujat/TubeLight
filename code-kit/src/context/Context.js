import { createContext } from "react";

const Context = createContext({
  auth: false,
  open: false,
  toggleAuth: () => {},
  toggleModalOpen: () => {}
});

export default Context;
