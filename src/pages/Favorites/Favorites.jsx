import * as React from "react"
import { View, Text, ActivityIndicator, Pressable } from "react-native"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { movieDetailUrl } from "../../service/urls"
import { useFocusEffect } from "@react-navigation/native"
import styles from "./favorites.style"
import apiKey from "../../service/apiKey"

export default function Favorites({ navigation }) {
  const favoriteIds = useSelector(state => state.favorites.value)
  const [isLoading, setisLoading] = useState(true)
  const favorites = []

  const handleButton = () => {
    navigation.goBack()
  }

  const getFavorites = () => {
    if (favoriteIds.length === 0) return
    console.log("-------------------------")
    console.log("Favori listesi: ", favoriteIds)

    Promise.all(
      favoriteIds.map(async (id) => {
        const response = await fetch(movieDetailUrl + id + apiKey).then(async res => await res.json())
        favorites.push(response)
      })
    ).then(() => favorites.map(e => {
      console.log(e.original_title)
      setisLoading(false)
    }))
  }

  useFocusEffect(() => {
    getFavorites()
    return () => { }
  })

  if (isLoading) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size={"large"} />
      </View>
    )
  } else {
    if (favorites.length !== 0) {
      return (
        <View style={styles.container}>
          {
            favorites.map((e, i) => {
              return (
                <Text style={{ color: "white" }} key={i}>{e.original_title}</Text>
              )
            })
          }
        </View>
      )
    } else {
      return (
        <View style={styles.activityContainer}>
          <Text style={styles.buttonText}>No favorites here</Text>
          <Pressable onPress={handleButton} style={styles.button}>
            <Text style={styles.buttonText}>Add one now!</Text>
          </Pressable>
        </View>
      )
    }

  }
}
