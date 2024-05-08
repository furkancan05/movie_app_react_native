import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

// utils
import {getImage} from '../utils/getImage';

// config
import {colors} from '../config/colors';

// types
import {StackNavigation} from '../types/navigation.types';
import {Movie} from '../types/api.types';

// components
import {Star} from 'react-native-feather';

// hooks
import useGetGenres from '../hooks/useGetGenres';

// store
import {useStore} from '../store/store';

function Banner() {
  const movies = useStore(store => store.nowPlaying);

  const [index, setIndex] = React.useState(0);

  const screenWidth = Dimensions.get('screen').width - 20;

  // change pagination index on scroll carousel
  const scroll = () => {
    if (index === 4) setIndex(0);

    setIndex(index + 1);
  };

  return (
    <View style={{flex: 1}}>
      <Carousel
        loop
        autoPlay
        width={screenWidth}
        height={560}
        autoPlayInterval={3000}
        data={movies.slice(0, 5)}
        renderItem={data => <CarouselCard movie={data.item} />}
        onScrollBegin={scroll}
      />

      <View style={styles.pagination}>
        {[0, 1, 2, 3, 4].map(num => {
          return <PaginationItem condition={num === index} />;
        })}
      </View>
    </View>
  );
}

function CarouselCard({movie}: {movie: Movie}) {
  const {navigate} = useNavigation<StackNavigation>();

  const {genres} = useGetGenres({movie});

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigate('MovieDetail', {movieId: movie.id});
      }}>
      <View style={styles.container}>
        <Image
          style={{flex: 1, borderRadius: 15, objectFit: 'cover'}}
          source={{
            uri: getImage(movie?.poster_path),
          }}
        />

        <LinearGradient
          colors={[
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0.4)',
            'rgba(0, 0, 0, 0.6)',
            'rgba(0, 0, 0, 0.8)',
            'rgba(0, 0, 0, 0.9)',
          ]}
          style={styles.metadataContainer}>
          <Text style={styles.title}>{movie?.title}</Text>

          <View style={styles.rows}>
            <Text
              style={{
                color: colors.textLightColor,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {genres.slice(0, 3).join(',')}
            </Text>

            <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
              <Star stroke="red" fill="red" width={15} />
              <Text style={{color: colors.textLightColor, fontWeight: 'bold'}}>
                {movie?.vote_average.toFixed(1)}
              </Text>
            </View>
          </View>

          <Text style={styles.overview}>{movie?.overview}</Text>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
}

function PaginationItem({condition}: {condition: boolean}) {
  const paginationWidth = React.useRef(new Animated.Value(10)).current;

  React.useEffect(() => {
    Animated.timing(paginationWidth, {
      toValue: condition ? 15 : 10,
      duration: 80,
      useNativeDriver: false,
    }).start();
  }, [condition]);

  return (
    <Animated.View
      style={{
        width: paginationWidth,
        aspectRatio: 1 / 1,
        borderRadius: 50,
        marginTop: 10,
        backgroundColor: colors.textDarkColor,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 560,
    position: 'relative',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 15,
  },
  metadataContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 30,
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    color: colors.textLightColor,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  overview: {
    color: colors.textLightColor,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    paddingHorizontal: 10,
  },
  pagination: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

export default React.memo(Banner);
