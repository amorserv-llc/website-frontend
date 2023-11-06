import './index.css';
import './styles/about.css';
import './styles/faq.css';
import './styles/service.css';
import './styles/trust.css';
import './styles/contact.css';
import React from "react";
import { createRoot } from "react-dom/client";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import HttpsRedirect from 'react-https-redirect';
const APP = (
 <React.StrictMode>
<HttpsRedirect>
<App />
</HttpsRedirect>
 </React.StrictMode>
);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
if (rootElement.hasChildNodes()) {
 render(APP, rootElement);
} else {
 root.render(APP);
}