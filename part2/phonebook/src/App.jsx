import { useEffect, useState } from "react";
import { getAll, create, deletePerson } from "./services/person";
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
    getAll().then((data) => {
      setPersons(data);
    });
  }, []);

  // addPerson submit handler
  const handleAddPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added on the phone-book`);
      return;
    } else if (persons.some((person) => person.number === newNumber)) {
      alert(`${newNumber} is already added on the phone-book`);
      return;
    }

    create(personObject).then((returnedPerson) => {
      setPersons([...persons, returnedPerson]);
      setNewName("");
      setNewNumber("");
    });
  };

  // handleDeletePerson
  const handleDeletePerson = (id) => {
    const person = persons.find((person) => person.id == id);
    const confirmed = window.confirm(`Are you sure deleted ${person.name}?`);
    confirmed &&
      deletePerson(id).then(() => {
        setPersons(persons.filter((n) => n.id !== id));
      });
  };

  // Filtered persons
  const filteredPersons = persons.filter((person) => {
    return person.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div>
      <h1>PhoneBook</h1>
      <Searchbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <br />
      <PersonForm
        onFormSubmit={handleAddPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <br />
      <Person persons={filteredPersons} onDeleteHandler={handleDeletePerson} />
    </div>
  );
}
