import MovieCard from "core/components/MovieCard";
import Pagination from "core/components/Pagination";
import { MoviesResponse } from "core/types/movie";
import { makePrivateRequest } from "core/utils/request";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './styles.scss';

const Catalog = () => {

    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [activePage, setActivePage] = useState(0);
    console.log(moviesResponse);

    useEffect (()=>{
        const params = {
            page: activePage,
            linesPerPage:10
        }
        makePrivateRequest ({url:'/movies', params})
        .then(response => setMoviesResponse(response.data));
    },[activePage]);

    return (
        <div className="catalog-container">            
            <div className="catalog-movies">
                {moviesResponse?.content.map(movie => (
                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                        <MovieCard movie={movie}/>
                    </Link>
                ))}
            </div>
            {moviesResponse && (
                <Pagination totalPages={moviesResponse?.totalPages} activePage={activePage} onChange={page => setActivePage(page)} />
            
            )}                
        </div>
        
    )
}

export default Catalog;