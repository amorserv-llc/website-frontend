/** @format */

import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Portfolio = lazy(() => import("./components/pages/Portfolio"));
const Blog = lazy(() => import("./components/pages/Blog"));
const Contact = lazy(() => import("./components/pages/Contact"));
const TermsCondition = lazy(() => import("./components/pages/TermsCondition"));
const Seo = lazy(() => import("./components/pages/Seo"));
const Smm = lazy(() => import("./components/pages/services/Smm"));
const Em = lazy(() => import("./components/pages/services/Em"));
const Sem = lazy(() => import("./components/pages/services/Sem"));
const Branding = lazy(() => import("./components/pages/services/Branding"));
const ScrollToTop = lazy(() => import("./components/layouts/ScrollToTop"));
const ThankYou = lazy(() => import("./components/pages/ThankYou"));
const Layout = lazy(() => import("./components/layouts/layout"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          element: (
            <ScrollToTop>
              <Home />
            </ScrollToTop>
          ),

          index: true,
        },
        {
          path: "/about-us",
          element: (
            <ScrollToTop>
              <About />
            </ScrollToTop>
          ),
        },
        {
          path: "/portfolio",
          element: (
            <ScrollToTop>
              <Portfolio />
            </ScrollToTop>
          ),
        },
        {
          path: "/blog",
          element: (
            <ScrollToTop>
              <Blog />
            </ScrollToTop>
          ),
        },
        {
          path: "/contact-us",
          element: (
            <ScrollToTop>
              <Contact />
            </ScrollToTop>
          ),
        },
        {
          path: "/thank-you",
          element: (
            <ScrollToTop>
              <ThankYou />
            </ScrollToTop>
          ),
        },
        {
          path: "/terms-conditions",
          element: (
            <ScrollToTop>
              <TermsCondition />
            </ScrollToTop>
          ),
        },

        {
          path: "/search-engine-optimization",
          element: (
            <ScrollToTop>
              <Seo />
            </ScrollToTop>
          ),
        },
        {
          path: "/social-media-marketing",
          element: (
            <ScrollToTop>
              <Smm />
            </ScrollToTop>
          ),
        },
        {
          path: "/email-marketing",
          element: (
            <ScrollToTop>
              <Em />
            </ScrollToTop>
          ),
        },
        {
          path: "/search-engine-marketing",
          element: (
            <ScrollToTop>
              <Sem />
            </ScrollToTop>
          ),
        },
        {
          path: "/branding",
          element: (
            <ScrollToTop>
              <Branding />
            </ScrollToTop>
          ),
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<div></div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
