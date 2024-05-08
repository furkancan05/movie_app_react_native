import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';

// components
// import Searchbar from "../../components/searchbar"
// import Showcase from "../Showcase/Showcase"
import {colors} from '../config/colors';
import useGetMovies from '../hooks/useGetMovies';
import {useStore} from '../store/store';
import Banner from '../components/Banner';
import Slider from '../components/Slider';

export default function Homepage() {
  useGetMovies();

  const nowPlayingMovies = useStore(store => store.nowPlaying);
  const popularMovies = useStore(store => store.popularMovies);
  const topRatedMovies = useStore(store => store.topRatedMovies);
  const upcomingMovies = useStore(store => store.upcomingMovies);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView overScrollMode="never" bounces={false} style={{padding: 10}}>
        <Banner />

        <View style={{flexDirection: 'column', gap: 20, paddingVertical: 20}}>
          <Slider seeMore title="Now Playing" movies={nowPlayingMovies} />
          <Slider seeMore title="Most Popular" movies={popularMovies} />
          <Slider seeMore title="Top Rated" movies={topRatedMovies} />
          <Slider seeMore title="Upcoming" movies={upcomingMovies} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});
