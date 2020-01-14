const eventHub = document.querySelector("#mainContainer")

export const SearchBar = () => {
  const contentTarget = document.querySelector(".search_bar")

  eventHub.addEventListener("keypress", e => {
    console.log(e.key)
    console.log("before the if logic")
    if (e.target.id === "searchBar" && e.key === "Enter") {
      console.log("i am in the if logic")
      let searchText = document.querySelector("#searchBar").value
        const message = new CustomEvent("searchInitiated", {
          detail: {
            SearchBarValue: searchText
          }
      })
      eventHub.dispatchEvent(message)
    }
  })

  const render = () => {
    contentTarget.innerHTML = `
    <div>Search Entries:</div>
    <input type="text" class="form-control mb-2 mr-sm-2" id="searchBar" placeholder="Search journal...">`
  }
  render()
}

{/* <button type="button" class="btn btn-primary mb-2">Search</button> */}