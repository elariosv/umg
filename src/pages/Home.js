import React from 'react';
import ResponsiveAppBar from '../components/menu';
import CompanyDescription from '../components/CompanyDescription';
import WhatsAppButton from '../components/Whatsapp';

const Home = () => {
  return (
    <div>
        <ResponsiveAppBar />
        <WhatsAppButton />
        <CompanyDescription />
    </div>
  );
};

export default Home;