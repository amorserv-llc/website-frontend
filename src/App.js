/** @format */

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Smm from "./components/pages/services/Smm";
import Em from "./components/pages/services/Em";
import Seo from "./components/pages/Seo";
import Sem from "./components/pages/services/Sem";
import TermsCondition from "./components/pages/TermsCondition";
import ScrollToTop from "../src/components/layouts/ScrollToTop";
import ThankYou from "./components/pages/ThankYou";
import Branding from "./components/pages/services/Branding";
import ErrorPage from "./components/pages/errorpage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' errorElement={<ErrorPage />}>
          <Route index element={<Home />} />
          <Route
            path='/blog'
            element={
              <ScrollToTop>
                {" "}
                <Blog />{" "}
              </ScrollToTop>
            }
          />
          <Route
            path='/contact-us'
            element={
              <ScrollToTop>
                {" "}
                <Contact />{" "}
              </ScrollToTop>
            }
          />
          <Route
            path='/about-us'
            element={
              <ScrollToTop>
                {" "}
                <About />{" "}
              </ScrollToTop>
            }
          />
          <Route
            path='/portfolio'
            element={
              <ScrollToTop>
                {" "}
                <Portfolio />{" "}
              </ScrollToTop>
            }
          />
          <Route path='/terms-conditions' element={<TermsCondition />} />
          <Route
            path='/search-engine-optimization'
            element={
              <ScrollToTop>
                {" "}
                <Seo />{" "}
              </ScrollToTop>
            }
          />
          <Route
            path='/social-media-marketing'
            element={
              <ScrollToTop>
                {" "}
                <Smm />{" "}
              </ScrollToTop>
            }
          />
          <Route
            path='/email-marketing'
            element={
              <ScrollToTop>
                {" "}
                <Em />{" "}
              </ScrollToTop>
            }
          />
          <Route
            path='/search-engine-marketing'
            element={
              <ScrollToTop>
                {" "}
                <Sem />{" "}
              </ScrollToTop>
            }
          />
          <Route
            path='/thank-you'
            element={
              <ScrollToTop>
                {" "}
                <ThankYou />{" "}
              </ScrollToTop>
            }
          />
          <Route
            path='/branding'
            element={
              <ScrollToTop>
                <Branding />
              </ScrollToTop>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
