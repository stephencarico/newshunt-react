import React, { Component } from 'react';
import { fetchPostsIfNeeded } from '../actions';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import VisibleFeed from './VisibleFeed';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import Error from '../components/Error'
import '../css/materialize.min.css';
import '../css/fontawesome-free/css/all.min.css';
import '../css/NewsHunt.css';

class NewsHunt extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded());
  }

  render() {
    const { isFetching, hasError } = this.props;
    return (
      <div>
        <Navbar />
        <VisibleFeed />
        { isFetching ? 
          <Loading /> : hasError ? 
            <Error /> : <Footer /> 
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.posts.isFetching,
    hasError: state.posts.hasError
  }
}

export default connect(mapStateToProps)(NewsHunt);
