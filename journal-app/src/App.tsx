import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { EntryForm } from "./components/EntryForm";
import { Entries } from "./components/Entries";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="main">
        <EntryForm />
        <Entries />
      </main>
      <Footer />
    </>
  );
}

export default App;
