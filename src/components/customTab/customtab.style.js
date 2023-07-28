import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.backgroundColor,
    paddingBottom: 15
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: "grey"
  }
})