import Homepage from "./src/pages/Homepage";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";


export default function App() {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
}



