import MoodFilter from "./MoodFilter.js"

/*
 You need to make a new HTML element with a class of
 `filters` in index.html
*/


export const FilterBar = () => {
  const contentTarget = document.querySelector(".radio_buttons")
    const render = () => {
        contentTarget.innerHTML = `
            ${MoodFilter()}
        `
    }
    render()
}