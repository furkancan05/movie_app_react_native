import { ScrollView } from "react-native"
import Scrollable from "../../components/scrollable/Scrollable"

export default function Showcase() {
  const items = [
    {
      title: "Furkan",
      isFavorite: true
    },
    {
      title: "Furkan",
      isFavorite: false
    },
    {
      title: "Furkan",
      isFavorite: false
    },
    {
      title: "Furkan",
      isFavorite: false
    },
    {
      title: "Furkan",
      isFavorite: true
    },
    {
      title: "Furkan",
      isFavorite: false
    },
    {
      title: "Furkan",
      isFavorite: false
    },
    {
      title: "Furkan",
      isFavorite: true
    },
    {
      title: "Furkan",
      isFavorite: false
    }
  ]

  return (
    <ScrollView>
      <Scrollable items={items} title="Most Popular" />
      <Scrollable items={items} title="Recent" />
      <Scrollable items={items} title="New Orders" />
    </ScrollView>
  )
}