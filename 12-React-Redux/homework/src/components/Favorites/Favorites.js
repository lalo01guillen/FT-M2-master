import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFavorite} from '../../actions/index';
export class ConnectedList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
       {this.props.favorites.map((movie) =>(
            <li key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
              {movie.Title}
              </Link>
           <button onClick={() => this.props.removeMovieFavorite(movie.imdbID)}>remove from fav</button>
            </li>)
         )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.moviesFavourites
  }
}

function mapDispatchToProps(dispatch){
  return{
    removeMovieFavorite: movieId => dispatch(removeMovieFavorite(movieId))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ConnectedList);
