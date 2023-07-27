import { View, Text, FlatList, ActivityIndicator } from "react-native"
import styles from "./scrollable.style"
import MovieCard from "../movieCard/MovieCard"

export default function Scrollable({ item }) {
	if (item.isLoading) {
		return (
			<View style={styles.activityContainer}>
				<ActivityIndicator size={"large"} />
			</View>
		)
	} else {
		return (
			<View style={styles.mainContainer}>
				<Text style={styles.title}>{item.name}</Text>
				<FlatList
					data={item.datas}
					renderItem={(item) => MovieCard(item)}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		)
	}
}