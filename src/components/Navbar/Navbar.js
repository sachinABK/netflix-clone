import React from "react";
import { useHistory } from "react-router-dom";
import "./navbar.css";
import logo from "../../image/logo.png";
const Navbar = () => {
  const history = useHistory();

  return (
    <div className="navbar">
      <img
        onClick={() => history.push("/")}
        className="navbar__logo"
        src={logo}
        alt="Netflix Logo"
      />
      <img
        onClick={() => history.push("/profile")}
        className="navbar__avatar"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fdisp%2F366be133850498.56ba69ac36858.png&f=1&nofb=1"
        alt=""
      />
    </div>
  );
};

export default Navbar;
