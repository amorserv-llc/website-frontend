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
import fav from './Assets/fav.png';

import { Helmet } from 'react-helmet';


function App() {
  return (
    <>
         <Helmet>
        <link rel="shortcut icon" href={fav} type="image/x-icon" />
      </Helmet>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/terms/condition' element={<TermsCondition />} />
            <Route path='/search-engine-optimization' element={<Seo />} />
            <Route path='/social-media-marketing' element={<Smm />} />
            <Route path='/email-marketing' element={<Em />} />
            <Route path='/search-engine-marketing' element={<Sem />} />
            <Route path='/branding' element={<Branding />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
