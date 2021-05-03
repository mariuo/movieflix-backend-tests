
import { Movie } from 'core/types/movie';
import './styles.scss';

type Props = {
    movie: Movie;
}

const MovieCard = ({movie} : Props) => {


    return (
        <div className="card-base border-radius-10 product-card">
            <img src={movie.imgUrl} alt={movie.title} className="movie-card-img"/>
           <div className="movie-info">
               <h2 className="movie-name">
                    {movie.title}
               </h2>
               <h3 className="movie-age"> {movie.year}</h3> 
               <p className="movie-description"> {movie.subTitle}</p>
           </div>
        </div>
    )        
}

export default MovieCard;