import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// config
import {colors} from '../config/colors';

// utils
import {getImage} from '../utils/getImage';

// types
import {Movie} from '../types/api.types';
import {StackNavigation} from '../types/navigation.types';

interface SliderProps {
  title: string;
  moreButtonTo?: string;
  seeMore: boolean;
  movies: Movie[];
}

function Slider({title, seeMore, movies, moreButtonTo}: SliderProps) {
  const {navigate} = useNavigation<StackNavigation>();

  // yapilacak

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          {seeMore ? (
            <Text
              style={styles.moreButton}
              onPress={() => navigate(moreButtonTo || ('Homepage' as any))}>
              See More
            </Text>
          ) : null}
        </View>

        <FlatList
          horizontal
          data={movies}
          contentContainerStyle={{gap: 10}}
          renderItem={item => (
            <Image
              source={{uri: getImage(item.item.poster_path)}}
              style={{
                width: 150,
                aspectRatio: 2 / 3,
                borderRadius: 10,
              }}
            />
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 15,
  },
  title: {
    color: colors.textLightColor,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  moreButton: {
    color: colors.borderColor,
    fontWeight: 'bold',
    width: 100,
    textAlign: 'right',
  },
});

export default React.memo(Slider);
