import "./App.css";
import { initialEntries } from "./data/initialEntries"; // initial data for the entries to map them
import { useState } from "react";
import { uid } from "uid";

import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    const isFavorite = false;
    setEntries([{ id: uid(), date, isFavorite, ...newEntry }, ...entries]);
  }

  // ---------- share the state of setEntries to toggle the button ----------
  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }

  console.log(entries);
  // very interesting to see a new log after pressing the favorite button :)

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection
          entries={entries}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
