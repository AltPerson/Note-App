import WindowButtons from "./WindowButtons";
import Title from "./Title";
import Search from "./Search";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <WindowButtons />
      <Title />
      <Search />
    </div>
  );
}

export default Header;
