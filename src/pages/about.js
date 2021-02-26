import React from 'react';
import { Helmet } from 'react-helmet';

import { Hero, Info } from '@components/about';

const AboutPage = () => {
  return (
    <>
      <Helmet title="About me" />

      <div data-scroll-section>
        <Hero />
      </div>
      <div data-scroll-section>
        <Info />
      </div>
    </>
  );
};

export default AboutPage;
