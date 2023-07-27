import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

export default StyleSheet.create({
  container: {
    width: 120,
    height: 200,
    marginHorizontal: 10
  },
  image: {
    flex: 1,
    borderRadius: 10,
    position: "relative"
  },
  filmName: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textLightColor
  },
  heart: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 10,
    right: 10
  }
})