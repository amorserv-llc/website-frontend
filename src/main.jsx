/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../src/style/header.css";
import "../src/style/trust.css";
import "../src/style/about.css";
import "../src/style/blog.css";
import "../src/style/contact.css";
import "../src/style/service.css";
import HttpsRedirect from 'react-https-redirect';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HttpsRedirect>
      <App />
    </HttpsRedirect>
  </React.StrictMode>
);
