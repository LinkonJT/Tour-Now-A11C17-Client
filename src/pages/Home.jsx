import React from 'react';
import Banner from '../pages/Banner';
import FeaturedPackages from '../components/FeaturedPackages';
import BecomeGuide from '../components/BecomeGuide';
import FAQ from '../components/FAQ';

const Home = () => {

  
    return (
        <div>
          <Banner></Banner>
          <FeaturedPackages></FeaturedPackages>

<BecomeGuide></BecomeGuide>
<FAQ></FAQ>

        </div>
    );
};

export default Home;