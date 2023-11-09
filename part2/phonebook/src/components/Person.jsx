export default function Person({ persons, onDeleteHandler }) {
  return (
    <section>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <p key={person.id}>
            {person.name} {person.number}{" "}
            <button onClick={() => onDeleteHandler(person.id)}>Delete</button>
          </p>
        ))}
      </div>
    </section>
  );
}
