import { Provider } from "mobx-react";
import React from "react";
import Root from "./navigation/Root";
import store from "./store/NiceListStore";

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
