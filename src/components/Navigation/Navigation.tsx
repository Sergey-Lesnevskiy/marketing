import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <NavLink to="/main">Main</NavLink>
        <NavLink to="/vladlen">Vladlen</NavLink>
      </nav>
      
    </>
  );
};

export default Navigation;
