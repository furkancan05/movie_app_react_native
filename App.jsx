import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "react-native";
import 'react-native-gesture-handler';
import Homepage from "./src/pages/Homepage";
import MovieDetail from "./src/pages/MovieDetail";
import Favorites from "./src/pages/Favorites";
import CustomTab from "./src/components/customTab";
import colors from "./src/styles/colors";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {

  const screenOptions = {
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: colors.backgroundColor,
      elevation: 0
    },
    headerTitleStyle: {
      color: colors.textLightColor,
      fontSize: 24,
      textTransform: "capitalize"
    }
  }

  return (
    <Provider store={store}>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions} tabBar={props => <CustomTab {...props} />}>
          <Tab.Screen name="movie app" component={StackComponent} />
          <Tab.Screen name="favorites" component={Favorites} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function StackComponent() {
  return (
    <Stack.Navigator initialRouteName="homepage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="homepage" component={Homepage} />
      <Stack.Screen name="moviedetail" component={MovieDetail} />
    </Stack.Navigator>
  )
}



