import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';

class Movie extends React.Component {
    constructor(props) {
        super(props);
      }
    componentDidMount(){
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }

    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula 
                <br></br> 
                {this.props.details.name}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        details: state.movieDetail
    }
}

function mapDispatchToProps(dispatch){
    return{
        getMovieDetail: (movieId) => dispatch(getMovieDetail(movieId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);