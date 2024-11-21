import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "./providers/RouterProvider";
import { SoundProvider } from "./providers/soundContext";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SoundProvider>
      <BrowserRouter />
    </SoundProvider>
  </React.StrictMode>
);
