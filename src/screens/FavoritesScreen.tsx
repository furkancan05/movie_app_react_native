import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  StyleSheet,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// config
import {colors} from '../config/colors';
import {constants} from '../config/constants';

export default function Favorites({navigation}: any) {
  const [isLoading, setisLoading] = React.useState(true);
  const [favorites, setFavorites] = React.useState<any[]>([]);

  const handleButton = () => {
    navigation.goBack();
  };

  // get favorite films from local storage
  const getFavorites = React.useCallback(async () => {
    const storagedItems = await AsyncStorage.getItem(constants.favorites);

    if (storagedItems) setFavorites(JSON.parse(storagedItems));
    setisLoading(false);
  }, []);

  // run get favorites function when tab is active
  useFocusEffect(() => {
    getFavorites();
  });

  if (isLoading)
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  else if (favorites.length !== 0) {
    return (
      <View style={styles.container}>
        {favorites.map((e, i) => {
          return (
            <Text style={{color: 'white'}} key={i}>
              {e.original_title}
            </Text>
          );
        })}
      </View>
    );
  } else {
    return (
      <View style={styles.activityContainer}>
        <Text style={styles.buttonText}>No favorites here</Text>
        <Pressable onPress={handleButton} style={styles.button}>
          <Text style={styles.buttonText}>Add one now!</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    padding: 10,
  },
  activityContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.textDarkColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: colors.textLightColor,
    fontSize: 18,
  },
});
