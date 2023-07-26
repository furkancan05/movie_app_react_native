import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.borderColor,
        padding: 3,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    input: {
        color: colors.textLightColor,
        flex: 1
    },
    icon: {
        width: 25,
        height: 25,
        marginHorizontal: 5
    }
})