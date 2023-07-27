

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { myCtx } from "./ctx";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <myCtx.Provider value={{username: "andy", age: 20}}>
        <App />
      </myCtx.Provider>
    </BrowserRouter>
  </>
);
