// src/App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <Provider store={store}>
      <Jobs />
    </Provider>
  );
}

export default App;
