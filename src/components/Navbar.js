import React from 'react';
import FilterTab from '../containers/FilterTab'
import { VisibilityFilters } from '../actions'

const Navbar = () => (
  <nav>
    <div className="nav-wrapper container">
      <img className="brand-logo" src="images/threadz-logo.png" alt="threadz-logo"></img>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <FilterTab filter={VisibilityFilters.LOAD_ALL}>ALL</FilterTab>
        <FilterTab filter={VisibilityFilters.LOAD_HACKER_NEWS}>HACKER NEWS</FilterTab>
        <FilterTab filter={VisibilityFilters.LOAD_REDDIT}>REDDIT</FilterTab>
        <FilterTab filter={VisibilityFilters.LOAD_PRODUCT_HUNT}>PRODUCT HUNT</FilterTab>
        <FilterTab filter={VisibilityFilters.LOAD_GITHUB_TRENDING}>GITHUB TRENDING</FilterTab>
      </ul>
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <FilterTab filter={VisibilityFilters.LOAD_ALL}>All</FilterTab>
        <FilterTab filter={VisibilityFilters.LOAD_HACKER_NEWS}>Hacker News</FilterTab>
        <FilterTab filter={VisibilityFilters.LOAD_REDDIT}>Reddit</FilterTab>
        <FilterTab filter={VisibilityFilters.LOAD_PRODUCT_HUNT}>Product Hunt</FilterTab>
        <FilterTab filter={VisibilityFilters.LOAD_GITHUB_TRENDING}>Github Trending</FilterTab>
      </ul>
    </div>
  </nav>
)

export default Navbar