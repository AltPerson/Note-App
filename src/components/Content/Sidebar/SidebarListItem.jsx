function SidebarListItem({
  isSelected,
  title = "Title",
  time = "23:44",
  text = "Some text about me",
}) {
  const textLength = time.length === 5 ? 24 : 17;
  return (
    <div className={`list-item ${isSelected && "selected"}`}>
      <h4 className="list-item__title">
        {title.length >= 24 ? title.substr(0, 24) + "..." : title}
      </h4>
      <span className="list-item__data">{time}</span>
      <span className="list-item__text">
        {text.length > textLength ? text.substr(0, textLength) + "..." : text}
      </span>
    </div>
  );
}

export default SidebarListItem;
