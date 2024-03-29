import "./index.css";
import { Link } from "react-router-dom";

const Navbar = ({ display, setDisplay }) => {
  return (
    <>
      <div className="main-wrapper nav-container bg-blur">
        <div className="upper-annoucements" style={{ display }}>
          <div className="annoucements-content">
            <p>
              <i>🎉</i> Get instant additional 10% off on your first project
              with us (No question ask policy)
            </p>
            <button onClick={() => setDisplay("none")}>
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <nav className="w-75 m-auto navbar">
          <h1 className="logo">devlopify</h1>
          <ul className="p-0">
            <Link to="/" className="nav-items">
              Home
            </Link>
            <a href="#features" className="nav-items c-grey">
              Features
            </a>
            <Link to="/testimonials" className="nav-items c-grey">
              Testimonials
            </Link>
            <Link to="/pricings" className="nav-items c-grey">
              Pricing
            </Link>
            <Link to="/careers" className="nav-items c-grey" rel="noreferrer">
              Careers
            </Link>
          </ul>
          <a className="btn-primary" href="#footer">
            Hire Workforce
          </a>
          <button
            className="bg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>
      </div>
      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="nav-responsive">
          <ul className="p-0">
            <Link to="/" className="nav-items">
              Home
            </Link>
            <a href="#features" className="nav-items c-grey">
              Features
            </a>
            <Link className="nav-items c-grey">Testimonials</Link>
            <Link to="/pricings" className="nav-items c-grey">
              Pricing
            </Link>
            <Link to="/careers" className="nav-items c-grey" rel="noreferrer">
              Careers
            </Link>
          </ul>
          <button className="btn-primary">Hire Workforce</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
