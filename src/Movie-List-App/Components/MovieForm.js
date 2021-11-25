import React,{useState} from 'react';

import {useDispatch} from 'react-redux';

import {getMovieDetails} from '../../actions/movieAction';

const  MovieForm = () => {

    const dispatch = useDispatch();

    const[movieName,setMovieName] = useState('');
    
    const[movieRank,setMovieRank] = useState('');

    const[formErrors,setFormErrors] = useState({});

    const trackErrors = {};

    const runValidation = function(){

        if(movieNames.trim().length === 0){

            trackErrors['movieName'] = 'please give movie name'
        }


        if(movieRanks.trim().length === 0){
        
            trackErrors['movieRank'] = 'please  movie rank'
        }
    }

    const handleMovieName = function(e){
        const input = e.target.value;

        setMovieName(input);
    }


    const handleMovieRank = function(e){
        const inputValue = e.target.value;

        setMovieRank(inputValue);
    }

    const handleSubmit = function(e){
        e.preventDefault();


        runValidation();

        if(Object.keys(trackErrors).length ===0){

            setFormErrors({});

        
            const formData = {
                id:new Date().getTime().toString(),
                movieName:movieName,
                movieRank:movieRank
            }

    
            dispatch(getMovieDetails(formData));

            
            setMovieName('');
            setMovieRank('');
        }else{
            
            setFormErrors(trackErrors);
        }
    }

    return (
        <>

            <h3 className='text-capitalize'>
                Adding movies 
            </h3>

            <form>

        
                <div className="form-group">

                    <input 
                        type="text"
                        value={movieNames}
                        onChange={handleMovieName}
                        className='form-control'
                        placeholder='Enter movie name'
                    />

                    
                    {
                        formErrors.movieName && <span className='text-danger'> {formErrors.movieName} </span>
                    }

                </div>

    
                <div className="form-group">

                    <input 
                        type="text"
                        value={movieRank}
                        onChange={handleMovieRank}
                        className='form-control'
                        placeholder='IMDB Ranking'
                    />

            
                    {
                        formErrors.movieRank && <span className='text-danger'> {formErrors.movieRank} </span>
                    }

                </div>

                <button
                    type='submit'
                    className='btn btn-primary btn-md text-capitalize'
                    onClick={handleSubmit}
                >
                    add
                </button>

            </form>
            
        </>
    )
}

export default MovieForm;