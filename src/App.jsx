/** @format */

import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Index from "./components/Index";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import TermsCondition from "./components/TermsCondition";
import Seo from "./components/services/Seo";
import Smm from "./components/services/Smm";
import Em from "./components/services/Em";
import Sem from "./components/services/Sem";
import Branding from "./components/services/Branding";
import fav from "./Assets/fav.png";
import { Helmet } from "react-helmet";
import ScrollToTop from "./components/layout/ScrollToTop";
import ThankYou from "./components/layout/ThankYou";
import Faq from "./components/Faq";

function App() {
  return (
    <>
      <Helmet>
        <link rel='shortcut icon' href={fav} type='image/x-icon' />
      </Helmet>

      <Router>
        <div>
          <Routes>
            <Route
              path='/'
              element={
                <ScrollToTop>
                  {" "}
                  <Index />{" "}
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
              path='/thank-you'
              element={
                <ScrollToTop>
                  <ThankYou />
                </ScrollToTop>
              }
            />

            <Route
              path='/terms/condition'
              element={
                <ScrollToTop>
                  {" "}
                  <TermsCondition />{" "}
                </ScrollToTop>
              }
            />
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
              path='/branding'
              element={
                <ScrollToTop>
                  {" "}
                  <Branding />{" "}
                </ScrollToTop>
              }
            />
            <Route
              path='/faq'
              element={
                <ScrollToTop>
                  <Faq />
                </ScrollToTop>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
