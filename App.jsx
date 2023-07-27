import Homepage from "./src/pages/Homepage";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native"
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetail from "./src/pages/MovieDetail/MovieDetail";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="homepage" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="homepage" component={Homepage} />
          <Stack.Screen name="moviedetail" component={MovieDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



