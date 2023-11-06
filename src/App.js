import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layouts/ScrollToTop";

const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Portfolio = lazy(() => import("./Pages/Portfolio/Portfolio"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const TermsCondition = lazy(() => import("./Pages/TermsCondition/TermsCondition"));
const Seo = lazy(() => import("./Pages/Seo/Seo"));
const Smm = lazy(() => import("./Pages/Smm/Smm"));
const Em = lazy(() => import("./Pages/Em/Em"));
const Sem = lazy(() => import("./Pages/Sem/Sem"));
const Branding = lazy(() => import("./Pages/Branding/Branding"));
const ThankYou = lazy(() => import("./Pages/Thanks/ThankYou"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading Home...</div>}>
                <ScrollToTop>
                  <Home />
                </ScrollToTop>
              </Suspense>
            }
          />
          <Route
            path="/about-us"

            element={
              <Suspense fallback={<div>Loading About...</div>}>
                <ScrollToTop>
                  <About />
                </ScrollToTop>
              </Suspense>
            }
          />
          <Route
            path="/portfolio-page"
            element={
              <Suspense fallback={<div>Loading Portfolio...</div>}>
                <ScrollToTop>
                  <Portfolio />
                </ScrollToTop>
              </Suspense>
            }
          />
          <Route
            path="/blog"
            element={
              <Suspense fallback={<div>Loading Blog...</div>}>
                <ScrollToTop>
                  <Blog />
                </ScrollToTop>
              </Suspense>
            }
          />
          <Route
            path="/contact-us"
            element={
              <Suspense fallback={<div>Loading Contact...</div>}>
                <ScrollToTop>
                  <Contact />
                </ScrollToTop>
              </Suspense>
            }
          />
          <Route
            path="/terms-conditions"
            element={
              <Suspense fallback={<div>Loading Terms and Conditions...</div>}>
                <ScrollToTop>
                  <TermsCondition />
                </ScrollToTop>
              </Suspense>
            }
          />
          <Route
            path="/search-engine-optimization"
            element={
              <Suspense fallback={<div>Loading SEO...</div>}>
                <ScrollToTop>
                  <Seo />
                </ScrollToTop>
              </Suspense>
            }
          />
          <Route
            path="/social-media-marketing"
            element={
              <Suspense fallback={<div>Loading SMM...</div>}>
                <ScrollToTop>
                  <Smm />
                </ScrollToTop>
              </Suspense>
            }
          />
          <Route
            path="/email-marketing"
            element={
              <Suspense fallback={<div>Loading Email Marketing...</div>}>
                <ScrollToTop>
                  <Em />
                </ScrollToTop>
              </Suspense>
            }
          />
          <Route
            path="/search-engine-marketing"
            element={
              <Suspense fallback={<div>Loading Search Engine Marketing...</div>}>
                <ScrollToTop>
                  <Sem />
                </ScrollToTop>
              </Suspense>
            }
          />
          <Route
            path="/branding"
            element={
              <Suspense fallback={<div>Loading Branding...</div>}>
                <ScrollToTop>
                  <Branding />
                </ScrollToTop>
              </Suspense>
            }
          />
          <Route
            path="/thank-you"
            element={
              <Suspense fallback={<div>Loading Thank You Page...</div>}>
                <ScrollToTop>
                  <ThankYou />
                </ScrollToTop>
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
