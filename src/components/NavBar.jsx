import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "black",
    color: "white",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "18px",
  };

  const cartStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <nav style={navStyle}>
      <div>
        <Link to="/" style={linkStyle}>Inicio</Link>
        <Link to="/category/smartphones" style={linkStyle}>Smartphones</Link>
        <Link to="/category/laptops" style={linkStyle}>Laptops</Link>
        <Link to="/category/fragrances" style={linkStyle}>Fragrances</Link>
      </div>
      <div style={cartStyle}>
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
