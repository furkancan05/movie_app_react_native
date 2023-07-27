import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

export default StyleSheet.create({
  container: {
    marginTop: 20,
    height: 70
  },
  activityContainer: {
    marginTop: 20,
    height: 60,
    justifyContent: "center"
  },
  pressable: {
    borderWidth: 1,
    marginHorizontal: 5,
    borderColor: colors.textDarkColor,
    height: 40,
    justifyContent: "center",
    borderRadius: 50
  },
  button: {
    color: colors.textDarkColor,
    marginHorizontal: 15,
    fontSize: 18,
  }
})