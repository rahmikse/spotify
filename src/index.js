import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataLayer } from "./Context/DataLayer";
import reducer, { initialState } from "./Context/reducer";
import { SoundLayer } from "./Context/SoundLayer";
import soundReducer,{soundInitialState} from "./Context/soundReducer"
ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <SoundLayer initialState={soundInitialState} reducer={soundReducer}>
        <App />
      </SoundLayer>
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
