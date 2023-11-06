/** @format */

import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
const ScrollToTop = lazy(() => import("./components/layouts/ScrollToTop"));
const ThankYou = lazy(() => import("./Pages/Thanks/ThankYou"));
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
              <About />
          ),
        },
        {
          path: "/portfolio-page",
          element: (
              <Portfolio />
          ),
        },
        {
          path: "/blog",
          element: (
              <Blog />
          ),
        },
        {
          path: "/contact-us",
          element: (
              <Contact />
          ),
        },
        {
          path: "/thank-you",
          element: (
              <ThankYou />
          ),
        },
        {
          path: "/terms-conditions",
          element: (
              <TermsCondition />
          ),
        },

        {
          path: "/search-engine-optimization",
          element: (
              <Seo />
          ),
        },
        {
          path: "/social-media-marketing",
          element: (
              <Smm />
          ),
        },
        {
          path: "/email-marketing",
          element: (
              <Em />
          ),
        },
        {
          path: "/search-engine-marketing",
          element: (
              <Sem />
          ),
        },
        {
          path: "/branding",
          element: (
              <Branding />
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
