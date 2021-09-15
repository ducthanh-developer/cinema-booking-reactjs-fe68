import React, { Component, Fragment } from 'react';
import HomeApp from './HomeApp/HomeApp';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import HomeNews from './HomeNews/HomeNews';
import HomeSelection from './HomeSelection/HomeSelection';
import HomeShowTime from './HomeShowTime/HomeShowTime';
import MovieList from './MovieList/MovieList';
export default class Home extends Component {
  render() {
    return (
      <>
        <HomeCarousel />
        <div className="products">
          <div className="products__content">
            <div className="container">
              <HomeSelection />
              <MovieList/>
            </div>
          </div>
        </div>
        <HomeShowTime />
        <HomeNews />
        <HomeApp />
      </>
    );
  }
}
