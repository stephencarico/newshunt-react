import React from 'react';
import Navbar from '../components/Navbar';
import VisibleFeed from './VisibleFeed';
import Footer from '../components/Footer';
import '../vendor/materialize.min.css';
import '../vendor/fontawesome-free/css/all.min.css';
import '../NewsHunt.css';

const NewsHunt = () => (
  <div>
    <Navbar />
    <VisibleFeed />
    <Footer />
  </div>
);

export default NewsHunt;
