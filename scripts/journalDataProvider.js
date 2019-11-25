/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
  {
    date: "11/15/2019",
    concept: "HTML & CSS",
    entry: "We worked on designing our fish pages for Martin's aquarium",
    mood: "Satisfied"
  },
  {
    date: "11/18/2019",
    concept: "String interpolation",
    entry: "Learned about string interpolation and why it is an important part of writing JS",
    mood: "Happy"
  },
  {
    date: "11/22/2019",
    concept: "Intro to JavaScript",
    entry: "Tested the JS waters by applying scripts to automate the writing process of HTML",
    mood: "Content"
  }
]

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
      (currentEntry, nextEntry) =>
          Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}