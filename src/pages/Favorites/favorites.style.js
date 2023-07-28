import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    padding: 10
  },
  activityContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: colors.textDarkColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 20
  },
  buttonText: {
    fontWeight: "bold",
    color: colors.textLightColor,
    fontSize: 18
  }
})