import {
  ScrollView,
  Pressable,
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {getCategories} from '../../redux/slices/categoriesSlice';
import {colors} from '../config/colors';
import React from 'react';
// import {apiKey} from '../config/service';
import {useFocusEffect} from '@react-navigation/native';
import {useStore} from '../store/store';

// KALKACAK

export default function Categories() {
  const [loading, setLoading] = React.useState(true);

  const categories = useStore(store => store.categories);

  if (loading) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  } else {
    return (
      <View />
      //   <ScrollView
      //     horizontal={true}
      //     style={styles.container}
      //     showsHorizontalScrollIndicator={false}>
      //     {value.map((v, i) => {
      //       return (
      //         <Pressable key={i} style={styles.pressable}>
      //           <Text style={styles.button}>{v.name}</Text>
      //         </Pressable>
      //       );
      //     })}
      //   </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 70,
  },
  activityContainer: {
    marginTop: 20,
    height: 60,
    justifyContent: 'center',
  },
  pressable: {
    borderWidth: 1,
    marginHorizontal: 5,
    borderColor: colors.textDarkColor,
    height: 40,
    justifyContent: 'center',
    borderRadius: 50,
  },
  button: {
    color: colors.textDarkColor,
    marginHorizontal: 15,
    fontSize: 18,
  },
});
