import React from 'react';
import FilterTab from '../containers/FilterTab'
import { VisibilityFilters } from '../actions'

const Navbar = () => (
  <div className="navbar-fixed">
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <img className="brand-logo center" src="images/news-hunt-color.png" alt="news-hunt" />
        </div>
        <div className="container nav-wrapper hide-mobile">
          <div className="nav-content">
            <span>
              <ul className="tabs tabs-fixed-width tabs-transparent">
                <FilterTab filter={VisibilityFilters.LOAD_ALL}>All</FilterTab>
                <FilterTab filter={VisibilityFilters.LOAD_HACKER_NEWS}>Hacker News</FilterTab>
                <FilterTab filter={VisibilityFilters.LOAD_REDDIT}>Reddit</FilterTab>
                <FilterTab filter={VisibilityFilters.LOAD_PRODUCT_HUNT}>Product Hunt</FilterTab>
                <FilterTab filter={VisibilityFilters.LOAD_GITHUB_TRENDING}>Github Trending</FilterTab>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>
)

export default Navbar