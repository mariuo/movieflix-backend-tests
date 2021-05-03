import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Link, useParams } from 'react-router-dom';
import { Movie } from 'core/types/movie';
import { makePrivateRequest } from 'core/utils/request';

import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg'
import FormReview from 'core/pages/Catalog/Details/FormReview';

import CardReview from './CardReview';
import { isAllowedByRole } from 'core/utils/auth';
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
        <>
            <div className="details-container">
                <div className="details-content">
                    {isLoading ? <TextLoader /> : (
                        <>
                            <Link to="/movies" className="movie-details-goback" >
                                <ArrowIcon className="icon-goback" />
                                <h1 className="text-goback"> Voltar</h1>
                            </Link>
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
                            </>
                            )}
                        </div>
                        
                    {isAllowedByRole(['ROLE_MEMBER']) && (
                        <FormReview />
                    )}
                    {movie?.reviews.length ? (
                        <div className="list-detail-content">
                            {movie?.reviews.map(review => (
                                <CardReview key={review.id} review={review} />
                            ))}
                        </div>
                    ) : ('')
                    }
            
        </div>
        </>


    );
};

export default Details;