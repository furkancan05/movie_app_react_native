import { View, Text, Image, ImageBackground, TouchableWithoutFeedback } from "react-native"
import styles from "./moviecard.style"
import icons from "../../styles/icons/icons"
import { imageURL } from "../../service/urls"
import { useNavigation } from "@react-navigation/native"

export default function MovieCard({ item }) {
  return (
    <Navigate id={item.id}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{ uri: imageURL + item.poster_path }} />
        <Text style={styles.filmName} numberOfLines={1}>{item.original_title}</Text>
      </View>
    </Navigate>
  )
}

function Navigate({ children, id }) {
  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback onPress={() => { navigation.navigate("moviedetail", { id }) }}>
      {children}
    </TouchableWithoutFeedback>
  )
}