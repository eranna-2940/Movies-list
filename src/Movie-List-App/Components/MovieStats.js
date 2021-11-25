import React from 'react';

import { useSelector } from 'react-redux';

const  MovieStats = () => {

    const storeMovie = useSelector(function(state){
        return state.movie;
    });


    const topRankedMovie = () => {

        const emptyArray = [];

        for(let i=0;i<storeMovie.length;i++){
            emptyArray.push(storeMovie[i].movieRank);
        }

        const topRank = Math.min(...emptyArray);


        const findMovie = storeMovie.find(function(movie){
            if(Number(movie.movieRank) === topRank){
                return true;
            }
        })
        return findMovie;
    }

    const result = topRankedMovie();

    return (
        <>
            <h3 className='text-capitalize text-secondary'>
                movie stats
            </h3>

            <h4 className='text-capitalize text-primary'>
                total movies - <span className='text-danger'> {storeMovie.length} </span>
            </h4>

            <p className='lead text-capitalize text-dark'>
                top ranked movie details
            </p>

            <table className='table text-center'>

                <thead>
                    <tr>

                        <th scope='col'>
                            #
                        </th>

                        <th scope='col'>
                            Movie Name
                        </th>

                        <th scope='col'>
                            Movie Rank
                        </th>

                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>
                            {result.id}
                        </td>

                        <td>
                            {result.movieName}
                        </td>

                        <td>
                            {result.movieRank}
                        </td>
                    </tr>

                </tbody>

            </table>

        </>
    )
}

export default MovieStats;