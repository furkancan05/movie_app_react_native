import { useState } from "react"
import { TextInput, View, Image, TouchableOpacity } from "react-native"
import styles from "./searchbar.style"
import colors from "../../styles/colors"
import icons from "../../styles/icons/icons"

export default function Searchbar({ handleClick }) {
    const [input, setInput] = useState('')

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search for a movie..."
                value={input}
                onChangeText={setInput}
                placeholderTextColor={colors.textDarkColor}
            />
            <TouchableOpacity onPress={() => handleClick(input)}>
                <Image source={icons.search}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    )
}