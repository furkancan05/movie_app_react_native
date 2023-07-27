import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
  activityContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.backgroundColor
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: "center"
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  image: {
    width: "100%",
    aspectRatio: 2 / 3
  },
  heart: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 20,
    right: 20
  },
  title: {
    fontSize: 24,
    color: colors.textLightColor,
    fontWeight: "bold"
  },
  subtitlesContainer: {
    marginVertical: 10,
    width: "100%",
    flexDirection: "row"
  },
  subtitles: {
    color: colors.textDarkColor,
    fontSize: 16,
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 15,
    height: 15,
    tintColor: "yellow",
    marginRight: 10
  },
  overview: {
    fontSize: 20,
    color: colors.textLightColor,
    fontWeight: "bold",
    marginVertical: 15
  }
})