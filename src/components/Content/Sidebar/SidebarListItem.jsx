function SidebarListItem({
  isSelected,
  title = "Title",
  time = "23:44",
  text = "Some text about me",
  id,
  setSide,
  isEdit,
  isCreate,
}) {
  const [selected, setSelected] = isSelected;
  const textLength = time.length === 5 ? 29 : 22;
  return (
    <div
      className={`list-item ${selected.is && selected.id === id && "selected"}`}
      onClick={() => {
        if (isEdit || isCreate) return;
        setSelected({ is: true, id: id });
        setSide(true);
      }}
    >
      <h4 className="list-item__title">
        {title.length >= 37 ? title.substr(0, 37) + "..." : title}
      </h4>
      <span className="list-item__data">{time}</span>
      <span className="list-item__text">
        {text.length > textLength ? text.substr(0, textLength) + "..." : text}
      </span>
    </div>
  );
}

export default SidebarListItem;
