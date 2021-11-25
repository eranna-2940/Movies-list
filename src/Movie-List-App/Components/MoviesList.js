import React,{useState,useEffect} from 'react';

import MovieCard from './MovieCards';

import {useSelector,useDispatch} from 'react-redux';

import {deleteMovie} from '../../actions/movieAction';

const getLocalStorage = ()=>{
    
    let list = localStorage.getItem('list');

    
    const result = (list) ? JSON.parse(localStorage.getItem('list')) : [];
    return result;
}

const  MoviesList = () => {
    
    const [name,setName] = useState('');

    
    const [movies,setMovies] = useState(getLocalStorage());


    const storeData = useSelector(function(state){
        return state.movie;
    })


    const fetchData = function(){

        setMovies(storeData);
    }

    
    useEffect(fetchData,[]);

    
    const searchMovie = (value) => {
        const result = storeData.filter((ele) => {
            return ele.movieName.includes(value)
        })
    
        setMovies(result);
    } 


    const handleName = function(e){
        const inputValue = e.target.value.toLowerCase();

        setName(inputValue);
        
    
        searchMovie(inputValue);
    }

    const [orderBy,setOrderBy] = useState('');

    const dropDownValues = ['Name - A - Z', 'Name - Z - A','Rank - High - Low','Rank - Low - High'];
    
    
    const sortMovies = (data) => {
        if (data.length === 0) {
            setMovies(storeData)
        } else if (data === 'Name - A - Z') {
            const result = [...movies].sort((a, b) => {
                return (a.movieNames > b.movieNames) ? 1 : (b.movieNames > a.movieNames) ? -1 : 0
            })
            setMovies(result)
        } else if (data === 'Name - Z - A') {
            const result = [...movies].sort((a, b) => {
                return (b.movieNames > a.movieNames) ? 1 : (a.movieNames > b.movieNames) ? -1 : 0
            })
            setMovies(result)
        } else if (data === 'Rank - High - Low') {
            const result = [...movies].sort((a, b) => {
                return a.movieRanks - b.movieRanks
            })
            setMovies(result)
        } else if (data === 'Rank - Low - High') {
            const result = [...movies].sort((a, b) => {
                return b.movieRanks - a.movieRanks
            })
            setMovies(result);
        }
    }


    const handleOrderBy = function(e){
        const inputValue = e.target.value;

    
        setOrderBy(inputValue);
        sortMovies(inputValue);
    }

    const dispatch = useDispatch();

    const handleRemoveMovie = function(id){
    

        dispatch(deleteMovie(id));
    }

    const handleSubmit = (e) =>{

        e.preventDefault();
    }

    
    const useFunc = function(){
        localStorage.setItem('list',JSON.stringify(movies))
    }

    useEffect(useFunc,[movies]);

    return (
        <>

            <form  className='d-flex justify-content-around align-items-center mt-2' onSubmit={handleSubmit}>

    
                <div className="form-group">

                    <input 
                        type="text"
                        value={name}
                        placeholder='Search by name...'
                        onChange={handleName}
                        className='form-control'
                    />

                </div>


                <div className="form-group">

                    <select
                        value={orderBy}
                        onChange={handleOrderBy}
                        className='form-control'
                    >

                        <option>
                            order by 
                        </option>

                        {
                            dropDownValues.map(function(value,index){
                                return(
                                    <option
                                        key={index}
                                        value={value}
                                    >
                                        {value}
                                    </option>
                                )
                            })
                        }
                    </select>

                </div>
                
            </form>

            {
                <div className='row'>
                    {
                        movies.map((movie,index)=>{
                           

                            return (
                                <div className='col-lg-6 my-auto mx-auto my-2'>
                                    <MovieCard 
                                        key={index}
                                        {...movie} 
                                        handleRemoveMovie = {handleRemoveMovie} 
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            }
        </>
    )
}

export default MoviesList;