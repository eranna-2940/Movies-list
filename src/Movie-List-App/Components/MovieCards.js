import React from 'react';

const  MovieCards = (props) => {

    const{movieName,movieRank,imageSrc,handleRemove,id} = props;

    return (
        <div className='card'>
            
            <img     
                src={imageSrc}
                alt={movieName}
                className='img-fluid img-thumbnail'
            />

            <div className='card-header text-center text-capitalize text-info'>
                <h5>{movieName}</h5>
            </div>

            <div className='card-footer text-center d-flex justify-content-around align-items-center bg-info text-light'>

                <h4 className='text-dark'>{movieRanks}</h4>

                <button className='btn btn-md btn-warning' type='button' onClick={function(){handleRemove(id)}}>Delete</button>

            </div>

        </div>
    )
}

export default MovieCards;