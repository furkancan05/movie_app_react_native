import apiKey from "./apiKey"

export const request = async (url) => {
  const data = await fetch(url + apiKey).then(async res => await res.json())
  return data
}