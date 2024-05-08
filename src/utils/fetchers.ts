import {
  CastResponse,
  Category,
  CategoryResponse,
  MovieDetail,
  MovieResponse,
} from '../types/api.types';

interface FetchParams extends RequestInit {
  url: string;
  queries?: Record<string, string>;
}

class Api {
  private baseURL = 'https://api.themoviedb.org/3/';

  private prepareHeaders = (headers: Record<string, string>) => {
    return {
      ...headers,
    };
  };

  private prepareQueries = (queries: Record<string, string> | undefined) => {
    const queryObj = {
      api_key: '008f5f813391f494def03a37c01c9252',
      ...queries,
    };
    const queryString = new URLSearchParams(queryObj);

    return '?' + queryString.toString();
  };

  private call = async <T>({
    url,
    method,
    body,
    headers,
    queries,
  }: FetchParams): Promise<T> => {
    const response: T = await fetch(
      this.baseURL + url + this.prepareQueries(queries),
      {
        method,
        headers: this.prepareHeaders(headers as Record<string, string>),
        body: JSON.stringify(body),
      },
    ).then(async res => await res.json());

    return response;
  };

  public getCategories = async () => {
    const response = await this.call<CategoryResponse>({
      url: 'genre/movie/list',
      method: 'GET',
    });

    return response.genres;
  };

  public getNowPlaying = async ({language}: {language: string}) => {
    const response = await this.call<MovieResponse>({
      url: 'movie/now_playing',
      method: 'GET',
      headers: {language},
    });

    return response.results;
  };

  public getPopularMovies = async ({language}: {language: string}) => {
    const response = await this.call<MovieResponse>({
      url: 'movie/popular',
      method: 'GET',
      headers: {language},
    });

    return response.results;
  };

  public getTopRatedMovies = async ({language}: {language: string}) => {
    const response = await this.call<MovieResponse>({
      url: 'movie/top_rated',
      method: 'GET',
      headers: {language},
    });

    return response.results;
  };

  public getUpcomingMovies = async ({language}: {language: string}) => {
    const response = await this.call<MovieResponse>({
      url: 'movie/upcoming',
      method: 'GET',
      headers: {language},
    });

    return response.results;
  };

  public getMovieDetail = async ({
    language,
    movieId,
  }: {
    language: string;
    movieId: number;
  }) => {
    const response = await this.call<MovieDetail>({
      url: `movie/${movieId}`,
      method: 'GET',
      headers: {language},
    });

    return response;
  };

  public getMovieCast = async ({
    language,
    movieId,
  }: {
    language: string;
    movieId: number;
  }) => {
    const response = await this.call<CastResponse>({
      url: `movie/${movieId}/credits`,
      method: 'GET',
      headers: {language},
    });

    return response.cast;
  };
}

const api = new Api();
export default api;
