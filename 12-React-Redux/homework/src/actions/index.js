export function getMovies(title) {
    return function(dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=53bcd3d2&s=${title}`)
        .then(Response => Response.json())
        .then(data => { dispatch({type: "GET_MOVIES",payload: data})})
        .catch(error => console.log("data not found")); 
    }
} 

export function getMovieDetail(payload){
    return {type: "GET_MOVIE_DETAIL", payload}
}

export function addMovieFavorite(movie){
    return {type: "ADD_MOVIE_FAVORITE", payload:movie}
}

export function removeMovieFavorite(movieId){
    return {type: "REMOVE_MOVIE_FAVORITE", payload:movieId}
}