import { View, Text, FlatList } from "react-native"
import styles from "./scrollable.style"
import MovieCard from "../movieCard/MovieCard"

export default function Scrollable({ items, title }) {

	return (
		<View style={styles.mainContainer}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				data={items}
				renderItem={(item) => MovieCard(item)}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	)
}