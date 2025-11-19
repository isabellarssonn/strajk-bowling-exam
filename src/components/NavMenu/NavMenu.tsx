import { useState } from "react";
import { Link } from "react-router-dom";
import "./navMenu.css"

function NavMenu() {
    const [open, setOpen] = useState(false);

    function toggleMenu() {
        setOpen((prev) => !prev);
    }

    function closeMenu() {
        setOpen(false);
    }

  return (
    <>
        <button className={`nav ${open ? "open" : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav className={`side__menu ${open ? "show" : ""}`}>
            <Link to="/" onClick={closeMenu}>Booking</Link>
            <Link to="/confirmation" onClick={closeMenu}>Confirmation</Link>
        </nav>
    </>
  );
}

export default NavMenu