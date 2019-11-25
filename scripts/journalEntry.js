/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

const JournalEntryComponent = (entry) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
        <h4>${entry.concept}</h4>  
        <h6>${entry.date}</h6>
        <p>${entry.entry}</p>
        <h6>Mood of the day: ${entry.mood}</h6>
      </section>
      <hr/>
  `
}

export default JournalEntryComponent