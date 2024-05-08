import {useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Platform, NativeModules} from 'react-native';

// config
import {colors} from '../config/colors';

// icons
import {Home, Heart, Settings} from 'react-native-feather';

// utils
import api from '../utils/fetchers';

// store
import {useStore} from '../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {constants} from '../config/constants';

export default function CustomTab({state, navigation}: BottomTabBarProps) {
  const setCategories = useStore(store => store.setCategories);

  const navigate = (index: number) => {
    navigation.navigate(state.routes[index].name);
  };

  // set apps lang on load if not setted before
  const checkAppLang = async () => {
    const storedLang = await AsyncStorage.getItem(constants.language);

    if (storedLang) return;

    const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;

    await AsyncStorage.setItem(constants.language, deviceLanguage);
  };

  // get category list on app mount
  const fetchCategories = async () => {
    const categories = await api.getCategories();

    if (!categories) return;

    setCategories(categories);
  };

  useEffect(() => {
    Promise.all([fetchCategories(), checkAppLang()]);
    // fetchCategories();
    // checkAppLang
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigate(0)}
        style={styles.touchableArea}>
        <Home stroke={state.index === 0 ? colors.textDarkColor : 'grey'} />
        <Text
          style={{
            color: state.index === 0 ? colors.textDarkColor : 'grey',
            fontWeight: 'bold',
          }}>
          {state.routes[0].name}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigate(1)}
        style={styles.touchableArea}>
        <Heart stroke={state.index === 1 ? colors.textDarkColor : 'grey'} />
        <Text
          style={{
            color: state.index === 1 ? colors.textDarkColor : 'grey',
            fontWeight: 'bold',
          }}>
          {state.routes[1].name}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigate(2)}
        style={styles.touchableArea}>
        <Settings stroke={state.index === 2 ? colors.textDarkColor : 'grey'} />
        <Text
          style={{
            color: state.index === 1 ? colors.textDarkColor : 'grey',
            fontWeight: 'bold',
          }}>
          {state.routes[2].name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.backgroundColor,
    paddingVertical: 16,
    paddingHorizontal: 12,
    paddingBottom: 34,
    gap: 12,
  },
  touchableArea: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
});
