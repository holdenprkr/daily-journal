import JournalEntryComponent from "./journalEntry.js";
import { useEntries, deleteEntry } from "./journalDataProvider.js";

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")
const eventHub = document.querySelector("#mainContainer")

const EntryListComponent = () => {
  // Use the journal entry data from the data provider component
  const entries = useEntries()

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
          return JournalEntryComponent(entry)
        }).join("")
      }
      </section>`
    }
  render(entries)
}

export default EntryListComponent