function SidebarListItem({
  isSelected,
  title = 'Empty',
  time,
  text = 'Write Something here...',
  id,
  setSide,
  isEdit,
  isCreate,
}) {
  const [selected, setSelected] = isSelected;
  return (
    <div
      className={`list-item ${selected.is && selected.id === id && 'selected'}`}
      onClick={() => {
        if (isEdit || isCreate) return;
        setSelected({ is: true, id: id });
        setSide(true);
      }}
    >
      <h4 className="list-item__title">{title}</h4>
      <div className="list-item__info">
        <div className="list-item__data">{time}</div>
        <div className="list-item__text">{text}</div>
      </div>
    </div>
  );
}

export default SidebarListItem;
