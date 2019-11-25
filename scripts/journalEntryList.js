import { useJournalEntries } from "./journalDataProvider.js";
import JournalEntryComponent from "./journalEntry.js";


// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")

const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    entryLog.innerHTML += `
      <section class="allJournalEntries">
        <hr/>
        ${
          entries.map(
            (entry) => {
            return JournalEntryComponent(entry)
            }).join("")
          }
      </section>
    `
}

export default EntryListComponent