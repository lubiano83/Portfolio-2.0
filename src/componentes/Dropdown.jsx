/* Dropdown */

import {NavLink} from "react-router-dom";

const Dropdown = () => {
  return (
    <div className="dropdown" id="Dropdown">
        <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">
          Menu
        </button>
        <ul className="dropdown-menu">
            <NavLink to={"/"}><button className="dropdown-item" type="button">Name</button></NavLink>
            <NavLink to={"/Courses"}><button className="dropdown-item" type="button">Certificates</button></NavLink>
            <NavLink to={"/Tools"}><button className="dropdown-item" type="button">Tools</button></NavLink>
            <NavLink to={"/Works"}><button className="dropdown-item" type="button">Works</button></NavLink>
            <NavLink to={"/About"}><button className="dropdown-item" type="button">About</button></NavLink>
            <NavLink to={"/Contact"}><button className="dropdown-item" type="button">Contact</button></NavLink>
        </ul>
    </div>
  )
}; export default Dropdown;
