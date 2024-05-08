import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// utils
import api from '../utils/fetchers';

// store
import {useStore} from '../store/store';

// config
import {constants} from '../config/constants';

export default function useGetMovies() {
  const setNowPlaying = useStore(store => store.setNowPlaying);
  const setPopular = useStore(store => store.setPopular);
  const setTopRated = useStore(store => store.setTopRated);
  const setupcoming = useStore(store => store.setupcoming);

  const getNowPlaying = async () => {
    const lang = await AsyncStorage.getItem(constants.language);

    const movies = await api.getNowPlaying({language: lang || 'en-US'});
    setNowPlaying(movies);
  };

  const getUpcomingMovies = async () => {
    const lang = await AsyncStorage.getItem(constants.language);

    const movies = await api.getUpcomingMovies({language: lang || 'en-US'});
    setupcoming(movies);
  };

  const getTopRatedMovies = async () => {
    const lang = await AsyncStorage.getItem(constants.language);

    const movies = await api.getTopRatedMovies({language: lang || 'en-US'});
    setTopRated(movies);
  };

  const getPopularMovies = async () => {
    const lang = await AsyncStorage.getItem(constants.language);

    const movies = await api.getPopularMovies({language: lang || 'en-US'});
    setPopular(movies);
  };

  const getMovies = async () =>
    await Promise.all([
      getNowPlaying(),
      getTopRatedMovies(),
      getPopularMovies(),
      getUpcomingMovies(),
    ]);

  React.useEffect(() => {
    getMovies();
  }, []);

  return {getMovies};
}
