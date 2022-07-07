const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  function rootReducer(state = initialState,action){
    switch (action.type){
        case 'GET_MOVIES':
            return{
                ...state,
                moviesLoaded: action.payload.Search
            }
            case 'ADD_MOVIE_FAVORITE':
                return{
                    ...state,
                    moviesFavourites: [...state.moviesFavourites, action.payload]
                }
            case 'REMOVE_MOVIE_FAVORITE':
                return{
                    ...state,
                    moviesFavourites: state.moviesFavourites.filter((item) => item.imdbID !== action.payload)
                }
                case 'GET_MOVIE_DETAIL':
                   const arrPool = [...state.moviesLoaded, state.moviesFavourites].flat();
                  const detail = arrPool.filter((movie) => movie.imdbID === action.payload)
                  console.log(detail[0].Title)
                    return{
                        ...state,
                        movieDetail: {
                           name: detail[0].Title? detail[0].Title: "not found"
                        }
                    }
                default:
                    return state
    }
  }



  export default rootReducer;