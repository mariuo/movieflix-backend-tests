import MovieCard from "core/components/MovieCard";
import { MoviesResponse } from "core/types/movie";
import { makePrivateRequest } from "core/utils/request";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './styles.scss';

const Catalog = () => {

    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    console.log(moviesResponse);

    useEffect (()=>{
        const params = {
            page: 0,
            linesPerPage:12
        }
        makePrivateRequest ({url:'/movies', params})
        .then(response => setMoviesResponse(response.data));
    },[])

    return (
        <div className="catalog-container">
            <div className="card-base border-radius-10 filter-bar">
                filtro
            </div>
            <div className="catalog-movies">
                {moviesResponse?.content.map(movie => (
                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                        <MovieCard movie={movie}/>
                    </Link>
                ))}
                </div>
        </div>
    )
}

export default Catalog;