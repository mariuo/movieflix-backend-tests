import { Genre } from 'core/types/movie';
import { makePrivateRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './styles.scss';

type Props = {
    genre?: Genre;
    handleChangeGenre: (genre: Genre) => void    
}


const MovieFilters = ({genre, handleChangeGenre} : Props ) => {
    const [isLoadingGenre, setIsLoadingGenre] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);
    
    
    useEffect(()=>{        
        setIsLoadingGenre(true);
        makePrivateRequest({url: '/genres'})
        .then(response => setGenres(response.data))        
        .finally(()=> setIsLoadingGenre(false));
    },[]);

    return (
        <div className="card-base border-radius-10 movie-filter-container">
            <Select 
                name="genres"
                key={`select-${genre?.id}`}
                value={genre}
                isLoading={isLoadingGenre}
                options={genres}
                getOptionLabel={(option: Genre) => option.name}
                getOptionValue={(option: Genre) => String(option.id)}
                className="filter-select-container"
                classNamePrefix="movie-genres-select"
                placeholder="Generos"
                onChange={value => handleChangeGenre(value as Genre)}
                isClearable
            />
       </div> 
    );
};
export default MovieFilters;