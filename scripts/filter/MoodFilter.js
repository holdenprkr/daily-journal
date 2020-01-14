import { useMoods } from "../mood/moodDataProvider.js"

const MoodFilter = () => {
  const allMoods = useMoods()
  return `
      <fieldset class="fieldset">
          <div>Filter Entries by Mood:</div>
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            ${allMoods.map(
              mood => {
                return `
                <label id="label--${mood.id}"class="btn btn-secondary radioButton">
                  <input type="radio" name="options" id="option${mood.id}"> ${mood.mood}
                </label>
                `
              }
            ).join("")}
          </div> 
      </fieldset>
      </br>
      `
}

export default MoodFilter