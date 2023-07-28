import { View, Image, TouchableOpacity } from "react-native"
import styles from "./customtab.style"
import icons from "../../styles/icons/icons"
import colors from "../../styles/colors"

export default function CustomTab({ state, navigation }) {
  const iconList = [icons.home, icons.heart]

  const navigate = (index) => {
    navigation.navigate(state.routes[index].name)
  }

  return (
    <View style={styles.container}>
      {
        state.routes.map((route, i) => {
          const isFocused = state.index === i
          return (
            <TouchableOpacity onPress={() => navigate(i)} key={i}>
              <Image source={iconList[i]} style={[styles.icon, { tintColor: isFocused ? colors.textDarkColor : "grey", width: isFocused ? 35 : 30, height: isFocused ? 35 : 30 }]} />
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}