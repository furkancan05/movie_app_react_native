import {create} from 'zustand';

// types
import {Category, Movie} from '../types/api.types';

interface StoreType {
  categories: Category[];
  nowPlaying: Movie[];
  upcomingMovies: Movie[];
  topRatedMovies: Movie[];
  popularMovies: Movie[];

  setCategories: (val: Category[]) => void;
  setNowPlaying: (val: Movie[]) => void;
  setupcoming: (val: Movie[]) => void;
  setTopRated: (val: Movie[]) => void;
  setPopular: (val: Movie[]) => void;
}

export const useStore = create<StoreType>()(set => ({
  categories: [],
  nowPlaying: [],
  upcomingMovies: [],
  topRatedMovies: [],
  popularMovies: [],

  setCategories: val => set(() => ({categories: val})),
  setNowPlaying: val => set(() => ({nowPlaying: val})),
  setupcoming: val => set(() => ({upcomingMovies: val})),
  setTopRated: val => set(() => ({topRatedMovies: val})),
  setPopular: val => set(() => ({popularMovies: val})),
}));
