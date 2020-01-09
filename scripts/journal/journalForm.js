import { saveEntry, useEntries, editEntry, getEntries } from "./journalDataProvider.js"
import { useMoods } from "../mood/moodDataProvider.js"



const eventHub = document.querySelector("#mainContainer")
const contentTarget = document.querySelector(".formContainer")

const EntryFormComponent = () => {
  const allMoods = useMoods()

  eventHub.addEventListener("selectedEntryEdit", e => {
    console.log(e)
    const entriesCollection = useEntries()

    const entryToBeEdited = e.detail.IdOfEntry

    const entryToEdit = entriesCollection.find(
      (EntryObject) => {
        return EntryObject.id === parseInt(entryToBeEdited, 10)
      })

    document.querySelector("#entryId").value = entryToEdit.id
    document.getElementById("conceptInput").value = entryToEdit.concept
    document.getElementById("validationTextarea").value = entryToEdit.entry
    document.getElementById("moodInput").value = entryToEdit.moodId
  })

  // Handle internal element click
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submit") {
       clickEvent.preventDefault()
      const hiddenInputValue = document.querySelector("#entryId").value

      if (hiddenInputValue !== "") {
        const editedEntry = {
          id: parseInt(document.querySelector("#entryId").value, 10),
          concept: document.querySelector('#conceptInput').value,
          date: "Edited " + new Date(Date.now()).toLocaleDateString('en-US'),
          entry: document.querySelector('#validationTextarea').value,
          moodId: parseInt(document.querySelector('#moodInput').value)
        }

        editEntry(editedEntry).then(() => {
          eventHub.dispatchEvent(new CustomEvent("entryHasBeenEdited"))
        })
        document.getElementById("entryForm").reset()
        document.querySelector("#entryId").value = ""
      } else {
        //  clickEvent.preventDefault()

        // Make a new object representation of a note
        const newEntry = {
          concept: document.querySelector('#conceptInput').value,
          date: new Date(Date.now()).toLocaleDateString('en-US'),
          entry: document.querySelector('#validationTextarea').value,
          moodId: parseInt(document.querySelector('#moodInput').value)
        }

        // Change API state and application state
        saveEntry(newEntry).then(() => document.getElementById("entryForm").reset())
          .then(() => {
            const message = new CustomEvent("entryCreated")
            eventHub.dispatchEvent(message)
          })
      }
    }
  })

  const render = () => {
    contentTarget.innerHTML = `
      <form class="was-validated" id="entryForm">
        <div class="mb-4">
          <span class="question">
            <h4 class="howAreYou">How was today?</h4>
          </span>
        </div>
        <input type="hidden" name="entryId" id="entryId" value>
        <div class="form-group">
          <label for="inputAddress" id="conceptsLabel">Concepts:</label>
          <input type="text" id="conceptInput" class="form-control" placeholder="What concepts were covered?" required>
        </div>
 
        <label for="validationTextarea">Journal:</label>
        <textarea class="form-control is-invalid" id="validationTextarea" placeholder="What did you think about the concept(s)?" required></textarea>
 
        <div class="form-group">
          <label for="mood">Mood:</label>
          <select required class="custom-select" id="moodInput">
            <option selected disabled hidden value="">How did you feel about today?</option>
            ${allMoods.map(mood => `<option value="${mood.id}">${mood.mood}</option>`).join("")}
          </select>
          <div class="invalid-feedback">Please select a mood</div>
        </div>

        <div class="filters"></div>
 
        <button id="submit" type="button" class="btn btn-primary">Record Journal Entry</button>
      </form>`
  }
  render()
}

export default EntryFormComponent