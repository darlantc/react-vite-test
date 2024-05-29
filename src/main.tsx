import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("load react");

ReactDOM.createRoot(document.getElementById("nav")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
