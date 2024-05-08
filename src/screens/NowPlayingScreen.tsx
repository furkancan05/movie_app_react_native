import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// store
import {useStore} from '../store/store';

// config
import {colors} from '../config/colors';

// utils
import {getImage} from '../utils/getImage';

// types
import type {Movie} from '../types/api.types';
import {StackNavigation} from '../types/navigation.types';

export default function NowPlaying() {
  const movies = useStore(store => store.nowPlaying);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={movie => <MovieCard movie={movie.item} />}
      />
    </View>
  );
}

function MovieCard({movie}: {movie: Movie}) {
  // yapilacak => film detay sayfasina gidecek
  const {navigate} = useNavigation<StackNavigation>();

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.movieCard}>
        <Image
          source={{uri: getImage(movie.poster_path)}}
          style={{width: '100%', aspectRatio: 2 / 3, borderRadius: 15}}
        />

        <View style={styles.rank}>
          <Text style={styles.rankText}>{movie.vote_average.toFixed(1)}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    padding: 10,
  },
  movieCard: {
    width: '50%',
    padding: 5,
  },
  rank: {
    position: 'absolute',
    left: 20,
    top: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  rankText: {
    fontSize: 14,
    color: colors.textLightColor,
    fontWeight: 'bold',
  },
});
