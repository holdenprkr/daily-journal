let moods = []

export const useMoods = () => moods.slice()

export const getMoods = () => {
  return fetch('http://localhost:3000/moods')
  .then(response => response.json())
    .then(
      mood => {
        // console.table(entry)
        moods = mood
      })
}