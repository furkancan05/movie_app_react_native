import { ScrollView, Pressable, Text, ActivityIndicator, View } from "react-native"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from "./categories.style"
import { getCategories } from "../../redux/slices/categoriesSlice"

export default function Categories() {

  const dispatch = useDispatch()
  const { value, isLoading } = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  if (isLoading) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size={"large"} />
      </View>
    )
  } else {
    return (
      <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
        {
          value.map((v, i) => {
            return (
              <Pressable key={i} style={styles.pressable}>
                <Text style={styles.button}>{v.name}</Text>
              </Pressable>
            )
          })
        }
      </ScrollView>
    )
  }
}