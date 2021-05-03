import MovieCard from "core/components/MovieCard";
import MovieFilters from "core/components/MovieFilters";
import Pagination from "core/components/Pagination";
import { Genre, MoviesResponse } from "core/types/movie";
import { makePrivateRequest } from "core/utils/request";
import { useCallback, useEffect, useState } from "react";
import MovieLoader from 'core/components/Loaders/MovieLoader';
import { Link } from "react-router-dom";
import './styles.scss';

const Catalog = () => {

    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [activePage, setActivePage] = useState(0);
    const [genre, setGenre] = useState<Genre>();
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeGenre = ( genre: Genre) => {
        setActivePage(0);
        setGenre(genre);
    }
    
    const getMovies = useCallback (() => {
        setIsLoading(true);
        const params = {
            page: activePage,
            linesPerPage:10,
            genreId: genre?.id
        }
        makePrivateRequest ({url:'/movies', params})
        .then(response => setMoviesResponse(response.data))
        .finally(() => setIsLoading(false));

    }, [activePage, genre]);

    useEffect (()=>{
        getMovies();
    },[getMovies]);

    return (
        <div className="catalog-container">
            <MovieFilters genre={genre} handleChangeGenre={handleChangeGenre} />            
            <div className="catalog-movies">
            {isLoading ? <MovieLoader /> : (
            <>
                {moviesResponse?.content.map(movie => (
                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                        <MovieCard movie={movie}/>
                    </Link>
                ))}
            </>
            )}
            </div>
            {moviesResponse && (
                <Pagination totalPages={moviesResponse?.totalPages} activePage={activePage} onChange={page => setActivePage(page)} />            
            )}                
        </div>
        
    )
}

export default Catalog;