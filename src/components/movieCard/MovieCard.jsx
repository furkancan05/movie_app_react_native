import { View, Text, Image, ImageBackground } from "react-native"
import styles from "./moviecard.style"
import icons from "../../styles/icons/icons"
import { imageURL } from "../../service/urls"

export default function MovieCard({ item }) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={{ uri: imageURL + item.poster_path }}>
        <Image source={icons.heart} style={[styles.heart, { tintColor: item.isFavorite ? "red" : "grey" }]} />
      </ImageBackground>
      <Text style={styles.filmName} numberOfLines={1}>{item.original_title}</Text>
    </View>
  )
}