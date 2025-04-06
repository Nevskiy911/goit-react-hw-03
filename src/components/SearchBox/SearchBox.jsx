import s from "./SearchBox.module.css";

function SearchBox({ value, onChange }) {
  return (
    <div className={s.box}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
