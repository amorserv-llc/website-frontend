/** @format */

// /** @format */

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import "../src/style/header.css";
// import "../src/style/trust.css";
// import "../src/style/about.css";
// import "../src/style/blog.css";
// import "../src/style/contact.css";
// import "../src/style/service.css";
// import HttpsRedirect from 'react-https-redirect';

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <HttpsRedirect>
//       <App />
//     </HttpsRedirect>
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../src/style/header.css";
import "../src/style/trust.css";
import "../src/style/about.css";
import "../src/style/blog.css";
import "../src/style/contact.css";
import "../src/style/service.css";
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

// import React from "react";
// import App from "./App.jsx";
// import "./index.css";
// import "../src/style/header.css";
// import "../src/style/trust.css";
// import "../src/style/about.css";
// import "../src/style/blog.css";
// import "../src/style/contact.css";
// import "../src/style/service.css";
// import { createRoot } from "react-dom/client";
// import { render } from "react-dom";
// import HttpsRedirect from "react-https-redirect";

// const APP = (
//   <React.StrictMode>
//     <HttpsRedirect>
//       <App />
//     </HttpsRedirect>
//   </React.StrictMode>
// );

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);
// if (rootElement.hasChildNodes()) {
//   render(APP, rootElement);
// } else {
//   root.render(APP);
// }



