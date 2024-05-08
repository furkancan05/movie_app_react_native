import React from 'react';
import {useStore} from '../store/store';
import {Movie} from '../types/api.types';

export default function useGetGenres({movie}: {movie: Movie | undefined}) {
  const categories = useStore(store => store.categories);

  const genres = React.useMemo(() => {
    if (!movie) return [];

    const preparegGenres: string[] = [];

    movie.genre_ids.map(id => {
      categories.map(category => {
        if (category.id !== id) return;

        preparegGenres.push(category.name);
      });
    });

    return preparegGenres;
  }, [movie]);

  return {genres: genres};
}
