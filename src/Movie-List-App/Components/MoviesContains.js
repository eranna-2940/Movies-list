import React from 'react';

import {useSelector} from 'react-redux';

import MovieList from './MoviesList';

import MovieForm from './MovieForm';

import MovieStats from './MovieStats';

const  MoviesContains = () =>{
    const store = useSelector(function(state){
        return state.movie;
    });
    

    return (
        <div className='container'>

            <div className="row">

                <div className="col-lg-6 col-sm-6 order-2 order-lg-1 mt-3">

                
                    {
                        store.length > 0 && <MovieList/>
                    }
                    
                </div>
                
                <div className="col-lg-6 col-sm-6 order-1 order-lg-2 mt-1">

                
                    <MovieForm/>

                    
                    {
                        store.length > 0 && <MovieStats/>
                    }

                </div>

            </div>
            
        </div>
    )
}

export default MoviesContains;