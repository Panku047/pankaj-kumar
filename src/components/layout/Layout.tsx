import React from 'react';

import Header from '../header/Header';
import Skills from '../body/Skills';
import Projects from '../body/Projects';
import Interests from '../body/Interests';
import Contact from '../body/Contact';
import Footer from '../footer/Footer';

const Layout: React.FC = () => {
  return(
    <div>
      <Header />
      <Skills />
      <Projects />
      <Interests />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;