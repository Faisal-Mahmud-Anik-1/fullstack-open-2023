export default function Searchbar({ searchValue, setSearchValue }) {
  return (
    <section>
      <h2>Searchbar</h2>
      <label htmlFor="search-bar">Filter shown with </label>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="search"
        id="search-bar"
        placeholder="Monkey D. Luffy"
      />
    </section>
  );
}
