function SidebarListItem({
  isSelected,
  title = "Title",
  time = "23:44",
  text = "Some text about me",
}) {
  return (
    <div className={`list-item ${isSelected && "selected"}`}>
      <h4 className="list-item__title">
        {title.length >= 28 ? title.substr(0, 28) + "..." : title}
      </h4>
      <span className="list-item__data">{time}</span>
      <span className="list-item__text">
        {text.length > 27 ? text.substr(0, 24) + "..." : text}
      </span>
    </div>
  );
}

export default SidebarListItem;
