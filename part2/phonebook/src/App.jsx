import { useEffect, useState } from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";

export default function App() {
  // states
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");

  // Fetch data from 'http://localhost:3001/persons'
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      const data = response.data;
      setPersons(data);
    });
  }, []);

  // Form submit handler
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added on the phonebook`);
    } else if (persons.some((person) => person.number === newNumber)) {
      alert(`${newNumber} is already added on the phonebook`);
    } else {
      setPersons([
        ...persons,
        { name: newName, number: newNumber, id: persons.length + 1 },
      ]);
    }
    setNewName("");
    setNewNumber("");
  };

  const filteredPersons = persons.filter((person) => {
    return person.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>

      <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <br />

      <PersonForm
        onFormSubmit={handleFormSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <br />

      <Person persons={filteredPersons} />
    </div>
  );
}
