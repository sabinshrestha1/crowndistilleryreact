import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import SpiritsGallery from './components/home/SpiritsGallery';
import LegacyStory from './components/home/LegacyStory';
import ExperimentalCenters from './components/home/ExperimentalCenters';

function App() {
  return (
    <Layout>
      <Hero />
      <SpiritsGallery />
      <LegacyStory />
      <ExperimentalCenters />
    </Layout>
  );
}

export default App;
