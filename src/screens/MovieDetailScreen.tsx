import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../config/colors';
import {Cast, Movie, MovieDetail, MovieResponse} from '../types/api.types';
import api from '../utils/fetchers';
import {getImage} from '../utils/getImage';
import useGetGenres from '../hooks/useGetGenres';
import {Link, useRoute} from '@react-navigation/native';
import {StackNavigation} from '../types/navigation.types';
import {Star} from 'react-native-feather';

export default function MovieDetailScreen() {
  const [movie, setMovie] = React.useState<MovieDetail | undefined>(undefined);
  const [cast, setCast] = React.useState<Cast[] | undefined>(undefined);

  const {params} = useRoute();

  const getMovieDetail = async () => {
    const response = await api.getMovieDetail({
      language: 'en-US',
      //@ts-ignore
      movieId: params?.movieId,
    });

    setMovie(response);
  };

  const getCast = async () => {
    const response = await api.getMovieCast({
      language: 'en-US',
      //@ts-ignore
      movieId: params?.movieId,
    });

    setCast(response);
  };

  React.useEffect(() => {
    Promise.all([getMovieDetail(), getCast()]);
  }, []);

  const genres = React.useMemo(() => {
    if (!movie) return;

    return movie.genres.map(genre => genre.name);
  }, [movie]);

  if (!movie || !cast) return <View></View>;
  return (
    <View style={{flex: 1, backgroundColor: 'red', position: 'relative'}}>
      <BacgroundImage image={movie.poster_path} />

      <ScrollView
        overScrollMode="never"
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: getImage(movie.poster_path)}}
          style={{width: '100%', aspectRatio: 3 / 5}}
        />

        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.title}>{movie.title}</Text>

            <View style={styles.subtitlesContainer}>
              <Text style={styles.overview}>{genres?.join(' / ')}</Text>
            </View>

            <View style={styles.scoreContainer}>
              <Star fill="red" stroke="red" width={18} height={18} />
              <Text style={styles.overview}>
                {movie.vote_average.toFixed(1)}
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.subtitle}>Overview</Text>
            <Text style={styles.overview}>{movie.overview}</Text>
          </View>

          <View>
            <Text style={styles.subtitle}>Cast</Text>
            <FlatList
              horizontal
              data={cast}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{gap: 10}}
              keyExtractor={item => item.cast_id.toString()}
              renderItem={item => <CastCard cast={item.item} />}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function BacgroundImage({image}: {image: string}) {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'black',
      }}>
      <Image
        source={{uri: getImage(image)}}
        blurRadius={15}
        style={{width: '100%', height: '100%', opacity: 0.3}}
        resizeMode="cover"
      />
    </View>
  );
}

function CastCard({cast}: {cast: Cast}) {
  return (
    // <Link to={{screen:CastDetailScreen, params:{castId:cast.cast_id}}}>
    <View style={{alignItems: 'center', gap: 5}}>
      <Image
        source={{uri: getImage(cast.profile_path)}}
        style={{width: 100, height: 100, borderRadius: 50}}
      />
      <Text style={{color: colors.textLightColor}}>
        {cast.character.split(' ')[0]}
      </Text>
    </View>
    // </Link>
  );
}

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundColor,
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    opacity: 0.3,
  },
  infoContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 2 / 3,
  },
  heart: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  title: {
    fontSize: 24,
    color: colors.textLightColor,
    fontWeight: 'bold',
  },
  subtitlesContainer: {
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
  },
  overview: {
    color: colors.textDarkColor,
    fontSize: 16,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  icon: {
    width: 15,
    height: 15,
    tintColor: 'yellow',
    marginRight: 10,
  },
  subtitle: {
    fontSize: 20,
    color: colors.textLightColor,
    fontWeight: 'bold',
    marginVertical: 15,
  },
});
