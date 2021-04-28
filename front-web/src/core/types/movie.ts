export type MoviesResponse = {
    content: Movie[];
    totalPages: number;
}
export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genreId: number;
    reviews: Review[];
}

export type Review = {
    movieId: number;
    text: string;
}

export type Genre = {
    id: number;
    name: string;
}