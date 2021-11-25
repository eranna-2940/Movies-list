const initialStateValue = [];

const movieReducer = function(state = initialStateValue,action){
    switch(action.type){

        case 'MOVIE_ACTION' : {
            return [
                ...state,{...action.payload}
            ]
        }

        case 'DELETE_MOVIES':{
            return state.filter(function(movie){
                if(movie.id !== action.payload){
                    return {...movie}
                }
            })
        }

        default:{
            return [...state];
        }
    }
}

export default movieReducer;