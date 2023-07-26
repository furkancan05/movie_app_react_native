import { View, Text, Image } from "react-native"
import styles from "./moviecard.style"
import icons from "../../styles/icons/icons"

export default function MovieCard({ item }) {
  return (
    <View style={styles.container}>

      <View style={styles.image}>
        <Image source={icons.heart} style={[styles.heart, { tintColor: item.isFavorite ? "red" : "grey" }]} />
      </View>
      <Text style={styles.filmName}>{item.title}</Text>
    </View>
  )
}