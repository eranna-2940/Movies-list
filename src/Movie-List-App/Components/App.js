import React from 'react';

import '../Style/Main.scss';

import MoviesContains from './MoviesContains';

const  App =()  => {
    return (
        <>
            <h2 className='text-capitalize text-center my-2 text-warning font-weight-bold'>
                Movies List App
            </h2>

        
            <MoviesContains/>
        </>
    )
}

export default App;