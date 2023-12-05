import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navIndex">
      <ul>
        <li>
          <NavLink to="/" className=" btnNav ">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/detalles" className=" btnNav">
            Detalles
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
