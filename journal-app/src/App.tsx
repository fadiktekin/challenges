import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { EntryForm, FormDataType } from "./components/EntryForm";
import { Entries, EntryType } from "./components/Entries";
import { uid } from "uid";

import "./App.css";
import { Tabs } from "./components/Tabs";

const initialEntries: EntryType[] = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
    isFavorite: false,
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
    isFavorite: false,
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    isFavorite: false,
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
    isFavorite: false,
  },
];

function App() {
  const [entries, setEntries] = useState<EntryType[]>(initialEntries);
  const [filter, setFilter] = useState<string>("all");
  const favoriteEntries = entries.filter((entry) => entry.isFavorite);

  function handleAddEntry(data: FormDataType) {
    const date = new Date().toLocaleDateString("en-Us", {
      dateStyle: "medium",
    });

    const newEntry: EntryType = {
      ...data,
      date: date,
      id: uid(),
      isFavorite: false,
    };
    setEntries([...entries, newEntry]);
  }

  function handleShowFavoriteEntries() {
    setFilter("favorites");
  }

  function handleShowAllEntries() {
    setFilter("all");
  }

  function handleToggleFavorite(id: number) {
    console.log(id);
    setEntries(
      entries.map((entry) =>
        id === entry.id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }

  return (
    <>
      <Header />
      <main className="main">
        <EntryForm onAddEntry={handleAddEntry} />
        <Tabs
          favoriteEntriesCount={favoriteEntries.length}
          allEntriesCount={entries.length}
          showAllEntries={handleShowAllEntries}
          showFavoriteEntries={handleShowFavoriteEntries}
        />
        <Entries
          entries={filter === "all" ? entries : favoriteEntries}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
