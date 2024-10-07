import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

export default function App() {
  const [people, setPeople] = useState(0);
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter setPeople={setPeople} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
