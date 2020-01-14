import EntryListComponent from "./journal/journalEntryList.js";
import EntryFormComponent from "./journal/journalForm.js";
import { getEntries } from "./journal/journalDataProvider.js";
import { FilterBar } from "./filter/FilterBar.js";
import { getMoods } from "./mood/moodDataProvider.js";
import { SearchBar } from "./filter/SearchBar.js";


getEntries()
.then(getMoods)
.then(EntryFormComponent)
.then(FilterBar)
.then(SearchBar)
.then(() => EntryListComponent())
