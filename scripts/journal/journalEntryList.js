import JournalEntryComponent from "./journalEntry.js";
import { useEntries, deleteEntry, getEntries } from "./journalDataProvider.js";
import { useMoods } from "../mood/moodDataProvider.js";

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")
const eventHub = document.querySelector("#mainContainer")

const EntryListComponent = () => {
  // Use the journal entry data from the data provider component
  const entries = useEntries()
  const allMoods = useMoods()

  let filteredEntries = null
  eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("label--")) {
        const [notUsed, moodId] = event.target.id.split("--")
        filteredEntries = useEntries().filter(entry => {
          if (parseInt(moodId, 10) === entry.moodId)
          return moodId
        })
      }
      render(filteredEntries)
})

  eventHub.addEventListener("entryHasBeenEdited", e => {
    render(useEntries())
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editEntry--")) {
        const [notUsed, entryId] = clickEvent.target.id.split("--")

        /*
            Let all other components know that the user chose
            to edit an entry, and attach data to the message
            so that any listeners know which entry should be
            edited.
        */
        const message = new CustomEvent("selectedEntryEdit", {
          detail:{
            IdOfEntry: entryId
          }
        })
        eventHub.dispatchEvent(message)
    }
})

  eventHub.addEventListener("entryCreated", () => {
    render(useEntries())
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
      const [prefix, id] = clickEvent.target.id.split("--")
      deleteEntry(id).then(() => render(useEntries()))
    }
  })

  const render = entryCollection => {
    entryLog.innerHTML = `
      <section class="allJournalEntries">
        <hr/>
        ${
      entryCollection.map(
        (entry) => {
          const foundMood = allMoods.find(mood => mood.id === entry.moodId)
          return JournalEntryComponent(entry, foundMood)
        }).join("")
      }
      </section>`
    }
  render(entries)
}

export default EntryListComponent