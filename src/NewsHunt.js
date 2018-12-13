import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './materialize.min.css';

function Navbar() {
  return (<div class="navbar-fixed">
      <nav class="nav-extended">
        <div class="nav-wrapper">
          <img class="brand-logo center" src="images/news-hunt-color.png" />
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </div>
        <div class="container nav-wrapper">
          <div class="nav-content">
            <span>
              <ul class="tabs tabs-transparent">
                <li class="tab"><a href="/#/">All</a></li>
                <li class="tab"><a href="/#/">Hacker News</a></li>
                <li class="tab"><a href="/#/">Reddit</a></li>
                <li class="tab"><a href="/#/">Product Hunt</a></li>
                <li class="tab"><a href="/#/">Github Trending</a></li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>)
}

function Footer() {
  return (<footer class="container">
    <p>Created by <a href="https://github.com/robdrosenberg" target="_blank">Robert Rosenberg</a> and <a href="https://github.com/stephencarico" target="_blank">Stephen Carico</a></p>
  </footer>)
}

class NewsHunt extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default NewsHunt;
