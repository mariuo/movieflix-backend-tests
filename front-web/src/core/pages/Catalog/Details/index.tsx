import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { Movie } from 'core/types/movie';
import { makePrivateRequest } from 'core/utils/request';
import MovieLoader from 'core/components/Loaders/CardLoader';
import TextLoader from 'core/components/Loaders/TextLoader';

type ParamsType = {
    movieId: string;
}
const Details = () => {

    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
            .finally(() => setIsLoading(false));
    }, [movieId]);

    return (
        <div className="details-container">  
            {isLoading ? <TextLoader /> : (          
            <div className="details-content">
                
                <div className="">
                    <img src={movie?.imgUrl} alt={movie?.title} className="details-img" />
                </div>
                <div className="">
                    <h2 className="details-title">
                        {movie?.title}
                    </h2>
                    <h3 className="details-age">
                        {movie?.year}
                    </h3>
                    <h2 className="details-subtitle">
                        {movie?.subTitle}
                    </h2>
                    <div className="details-box">
                        <p className="details-description">
                            {movie?.synopsis}
                        </p>
                    </div>
                </div>                            
            </div> 
             ) } 
        </div>
    );
};

export default Details;