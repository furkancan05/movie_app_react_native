import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

export default StyleSheet.create({
    activityContainer: {
        height: 200,
        alignItems: "center",
        justifyContent: "center"
    },
    mainContainer: {
        marginVertical: 15,
    },
    title: {
        color: colors.textLightColor,
        marginVertical: 10,
        fontSize: 24
    },
})