import React from 'react';
import Navbar from './Navbar';
import VisibleFeed from '../containers/VisibleFeed';
import Footer from './Footer';
import '../App.css';
import '../vendor/materialize.min.css';
import '../vendor/fontawesome-free/css/all.min.css';

const NewsHunt = () => (
  <div>
    <Navbar />
    <VisibleFeed />
    <Footer />
  </div>
);

export default NewsHunt;
