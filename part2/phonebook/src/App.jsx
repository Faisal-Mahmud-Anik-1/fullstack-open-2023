import { useState } from "react";
import Searchbar from "./components/Searchbar";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";

const initialData = [
  { id: 0, name: "Monkey D. Luffy", number: "111-1234567" },
  { id: 2, name: "Shanks", number: "111-9876543" },
  { id: 1, name: "Roronoa Zoro", number: "040-9876543" },
  { id: 3, name: "Trafalgar D. Law", number: "040-1234567" },
];

export default function App() {
  const [persons, setPersons] = useState(initialData);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");

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
