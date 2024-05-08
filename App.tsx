import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

// screens
import FavoritesScreen from './src/screens/FavoritesScreen';
import HomepageScreen from './src/screens/HomepageScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import NowPlayingScreen from './src/screens/NowPlayingScreen';

// components
import CustomTab from './src/components/CustomTabBar';

// config
import {colors} from './src/config/colors';

// types
import {RootStackParamList} from './src/types/navigation.types';
import {NativeModules, Platform} from 'react-native';
import {useStore} from './src/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {constants} from './src/config/constants';
import api from './src/utils/fetchers';
import React from 'react';
import MovieDetailScreen from './src/screens/MovieDetailScreen';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function App() {
  const setCategories = useStore(store => store.setCategories);

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

  React.useEffect(() => {
    Promise.all([fetchCategories(), checkAppLang()]);
  }, []);

  return (
    <NavigationContainer>
      {/* <Tab.Navigator
        screenOptions={screenOptions}
        tabBar={props => <CustomTab {...props} />}>
        <Tab.Screen name="Home" component={StackComponent} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator> */}

      <StackComponent />
    </NavigationContainer>
  );
}

function StackComponent() {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
    headerStyle: {
      backgroundColor: colors.backgroundColor,
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTitleStyle: {
      color: colors.textLightColor,
      fontSize: 18,
      textTransform: 'capitalize',
    },
  };

  return (
    <Stack.Navigator initialRouteName="Homepage" screenOptions={screenOptions}>
      <Stack.Screen name="Homepage" component={HomepageScreen} />
      <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      <Stack.Screen
        name="NowPlaying"
        component={NowPlayingScreen}
        options={{title: 'Now Playing'}}
      />
    </Stack.Navigator>
  );
}
