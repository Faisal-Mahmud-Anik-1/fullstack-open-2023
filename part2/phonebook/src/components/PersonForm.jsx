export default function PersonForm({
  onFormSubmit,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) {
  return (
    <section>
      <h2>Add A New</h2>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="new-name"> Name: </label>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          id="new-name"
        />{" "}
        <label htmlFor="new-number"> Number: </label>
        <input
          type="text"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
          id="new-number"
        />{" "}
        <button type="submit" disabled={!newName || !newNumber}>
          Add
        </button>
      </form>
    </section>
  );
}
