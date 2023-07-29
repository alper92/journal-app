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
  const [filter, setFilter] = useState("all");

  // ---------- set filter states ----------
  function handleShowFavoriteEntries(params) {
    setFilter("favorites");
    console.log(filter);
  }

  function handleShowAllEntries() {
    setFilter("all");
    console.log(filter);
  }

  // ---------- set filter logic ----------
  // array "entries" are already all entries, we need do make a new array with favorite entries
  const favoriteEntries = entries.filter((entry) => entry.isFavorite === true);
  console.log(favoriteEntries);

  // ---------- set new entries to existing array (these are all entries) ----------
  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    const isFavorite = false;
    setEntries([{ id: uid(), date, isFavorite, ...newEntry }, ...entries]);
  }

  // ---------- share the state of entries to toggle the button ----------
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
          entries={filter === "favorites" ? favoriteEntries : entries}
          filter={filter}
          allEntriesCount={entries.length}
          favoriteEntriesCount={favoriteEntries.length}
          onToggleFavorite={handleToggleFavorite}
          onShowAllEntries={handleShowAllEntries}
          onShowFavoriteEntries={handleShowFavoriteEntries}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
