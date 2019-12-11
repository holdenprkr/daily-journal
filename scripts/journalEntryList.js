import JournalEntryComponent from "./journalEntry.js";
import { useEntries } from "./journalDataProvider.js";


// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

const EntryListComponent = () => {
  // Use the journal entry data from the data provider component
  const entries = useEntries()

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