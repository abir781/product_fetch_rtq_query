"use client";

import { Provider } from "react-redux";
import { store } from "./redux_rtk/store";



export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}