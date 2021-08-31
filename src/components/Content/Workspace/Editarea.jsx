function Editarea({ value, setValue, setSave }) {
  return (
    <div className="workspace-editarea">
      <textarea
        className="workspace-editarea__text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setSave(true)}>Save</button>
    </div>
  );
}

export default Editarea;
