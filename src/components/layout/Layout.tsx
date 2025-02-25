import React from 'react';

import Header from '../header/Header';
import Projects from '../body/Projects';
import Interests from '../body/interest/Interests';
import Footer from '../footer/Footer';
import Whatsapp from '../body/Whatsapp';
import MySkills from '../body/skills/MySkills';
import ContactMe from '../body/contact/ContactMe';

const Layout: React.FC = () => {
  return(
    <div>
      <Header />
      <MySkills />
      <Projects />
      <Interests />
      <ContactMe />
      <Footer />
      <Whatsapp />
    </div>
  );
};

export default Layout;