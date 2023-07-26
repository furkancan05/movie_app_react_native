import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: colors.backgroundColor
    },
    header: {
        color: colors.textLightColor,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 30,
        marginBottom: 20
    }
})