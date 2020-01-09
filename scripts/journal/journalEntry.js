/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

const JournalEntryComponent = (entry, mood) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
        <h4>${entry.concept}</h4>  
        <h6>${entry.date}</h6>
        <p>${entry.entry}</p>
        <h6>Mood of the day: ${mood.mood}</h6>
        <button class="btn btn-dark deleteButton" id="editEntry--${entry.id}">Edit</button>
        <button class="btn btn-dark deleteButton" id="deleteEntry--${entry.id}">Delete</button>
      </section>
      <hr/>
  `
}

export default JournalEntryComponent