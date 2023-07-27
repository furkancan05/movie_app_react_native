import { ScrollView } from "react-native"
import Scrollable from "../../components/scrollable/Scrollable"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getNowPlaying, getPopular, getTopRated, getUpcoming } from "../../redux/slices/shorcaseSlice"

export default function Showcase() {

  const dispatch = useDispatch()
  const { value } = useSelector(state => state.showcase)

  useEffect(() => {
    dispatch(getNowPlaying())
    dispatch(getPopular())
    dispatch(getTopRated())
    dispatch(getUpcoming())
  }, [])

  return (
    <ScrollView>
      {
        value.map((value, i) => {
          return <Scrollable key={i} item={value} />
        })
      }
    </ScrollView>
  )
}