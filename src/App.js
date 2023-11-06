import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
const Layout = lazy(() => import("./components/layouts/layout"))
const ErrorPage = lazy(() => import("./Pages/errorpage"));

const App = () => {
  return (
    <BrowserRouter>
      {" "}
      <Suspense>
        {" "}
        <Routes>
          {" "}
          <Route path='/' errorElement={<ErrorPage />} element={<Layout />}>
            {" "}
            <Route index element={<Home />} />{" "}
            <Route path='/about-us' element={<About />} />{" "}
            <Route path='/contact-us' element={<Contact />} />{" "}
            <Route path='/portfolio-page' element={<Portfolio />} />{" "}
            <Route path='/search-engine-optimization' element={<Seo />} />{" "}
            <Route path='/social-media-marketing' element={<Smm />} />{" "}
            <Route path='/search-engine-marketing' element={<Sem />} />{" "}
            <Route path='/email-marketing' element={<Em />} />{" "}
            <Route path='/terms-conditions' element={<TermsCondition />} />{" "}
            <Route path='/thank-you' element={<ThankYou />} />{" "}
            <Route path='/blog' element={<Blog />} />{" "}
            <Route path='/branding' element={<Branding />} />{" "}
          </Route>{" "}
        </Routes>{" "}
      </Suspense>{" "}
    </BrowserRouter>
  );
};
export default App; 




