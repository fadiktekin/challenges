import { useState } from "react";
import "./App.css";
import Form from "./components/Form.jsx";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form
        onSubmit={(name, email) => {
          setName(name);
          setEmail(email);
        }}
      />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
