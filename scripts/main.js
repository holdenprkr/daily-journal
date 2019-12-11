import EntryListComponent from "./journalEntryList.js";
import EntryFormComponent from "./journalForm.js";
import { getEntries } from "./journalDataProvider.js";

EntryFormComponent()

getEntries()
.then(() => EntryListComponent())

