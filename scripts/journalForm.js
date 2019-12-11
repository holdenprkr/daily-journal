import EntryListComponent from "./journalEntryList.js"
import { saveEntry } from "./journalDataProvider.js"


const eventHub = document.querySelector("#mainContainer")
const contentTarget = document.querySelector(".formContainer")

const EntryFormComponent = () => {

  // Handle internal element click
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submit") {
      //  clickEvent.preventDefault()

      // Make a new object representation of a note
      const newEntry = {
        concept: document.querySelector('#conceptInput').value,
        date: new Date(Date.now()).toLocaleDateString('en-US'),
        entry: document.querySelector('#validationTextarea').value,
        mood: document.querySelector('#moodInput').value
      }

      // Change API state and application state
      saveEntry(newEntry).then(() => document.getElementById("entryForm").reset()).then(() => EntryListComponent())
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
            <option>Satisfied</option>
            <option>Content</option>
            <option>Frustrated</option>
            <option>Confused</option>
            <option>Angry</option>
            <option>Hopeful</option>
            <option>Stressed</option>
            <option>Bored</option>
            <option>Sad</option>
            <option>Happy</option>
          </select>
          <div class="invalid-feedback">Please select a mood</div>
        </div>
 
        <button id="submit" type="button" class="btn btn-primary">Record Journal Entry</button>
      </form>`
  }
  render()
}

export default EntryFormComponent