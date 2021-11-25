import axios from 'axios';

export const getMovieDetails = function(movie){
    return function(dispatch){
        const baseUrl = `http://www.omdbapi.com/?apikey=f49fb7f7&s=${movie.movieName}`;

        
        axios
            .get(baseUrl)

        
            .then(function(response){
                const result = response.data.Search;
            

            
                (result) 
                        ? dispatch(movieAction({...movie,imageSrc : `${result[0].Poster}`})) 
                        : dispatch(movieAction({...movie,imageSrc : 'https://images.pexels.com/photos/10177094/pexels-photo-10177094.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'})) 
            })

        
            .catch(function(error){
                alert(error.message);
            })
    }
}


export const deleteMovie = (id) => {
    return {
        type: 'DELETE_MOVIES',
        payload: id
    } 
}


export const movieAction = function(movie){
    return {
        type:'MOVIE_ACTION',
        payload:movie
    }
} 