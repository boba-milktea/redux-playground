export interface GenresType {
  id: number;
  name: string;
}

export interface MovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres?: GenresType;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  homepage?: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieList {
  results: MovieType[];
}
