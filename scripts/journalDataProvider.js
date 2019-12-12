/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */
export const saveEntry = entry => {
  return fetch('http://localhost:3000/entries', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
  })
  .then(getEntries)
}

let entries = []

export const useEntries = () => entries.slice()

export const getEntries = () => {
  return fetch('http://localhost:3000/entries')
  .then(response => response.json())
    .then(
      entry => {
        // console.table(entry)
        entries = entry.slice().reverse()
      }
    )
}

export const deleteEntry = entryId => {
  return fetch(`http://localhost:3000/entries/${entryId}`, {
      method: "DELETE"
  })
      .then(getEntries)
}