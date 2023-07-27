import { View, Text, ActivityIndicator, ScrollView, ImageBackground, SafeAreaView, Image, TouchableOpacity } from "react-native"
import { useState, useEffect } from "react"
import { imageURL, movieDetailUrl } from "../../service/urls"
import { useDispatch, useSelector } from "react-redux"
import { addFavorites } from "../../redux/slices/favoritesSlice"
import styles from "./moviedetail.style"
import apiKey from "../../service/apiKey"
import icons from "../../styles/icons/icons"

export default function MovieDetail({ route }) {
  const { id } = route.params
  const [details, setDetails] = useState(null)
  const [isLoading, setisLoading] = useState(true)
  const categories = useSelector(state => state.categories.value)
  const favorites = useSelector(state => state.favorites.value)
  const dispatch = useDispatch()

  const favoriteIcon = {
    icon: favorites.includes(id) ? icons.heart : icons.heart_empty,
    isFavorited: favorites.includes(id) ? true : false
  }

  const getDetails = async () => {
    const data = await fetch(movieDetailUrl + id + apiKey).then(async res => await res.json())
    setDetails(data)
    setisLoading(false)
  }

  const handleHeart = () => {
    dispatch(addFavorites(id))
  }

  useEffect(() => {
    getDetails()
  }, [])

  if (isLoading) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size={"large"} />
      </View>
    )
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ScrollView>
            <ImageBackground source={{ uri: imageURL + details.poster_path }} style={styles.image}>
              <TouchableOpacity onPress={handleHeart}>
                <Image source={favoriteIcon.icon} style={[styles.heart, { tintColor: favoriteIcon.isFavorited ? "red" : "grey" }]} />
              </TouchableOpacity>
            </ImageBackground>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{details.title}</Text>
              <View style={styles.subtitlesContainer}>
                <Text style={styles.subtitles}>asdasda / asdasd / asddsa</Text>
                <Text style={[styles.subtitles, { flex: 1, textAlign: "right" }]}>{details.runtime} min.</Text>
              </View>
              <View style={styles.scoreContainer}>
                <Image source={icons.star} style={styles.icon}></Image>
                <Text style={styles.subtitles}>{details.vote_average.toFixed(1)}</Text>
              </View>
              <Text style={styles.overview}>Overview</Text>
              <Text style={styles.subtitles}>{details.overview}</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}