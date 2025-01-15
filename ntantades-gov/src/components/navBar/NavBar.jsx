import "./navBar.css";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="NavBar">
        <div className="logo" onClick={() => navigate("/")}>
          govgr
        </div>
        <div className="navbar">
          <Link className="nav-link" to="/">ΑΡΧΙΚΗ</Link>
          <Link className="nav-link" to="/drash">Η ΔΡΑΣΗ</Link>
          <Link className="nav-link" to="/goneas">ΓΟΝΕΑΣ</Link>
          <Link className="nav-link" to="/ntanta">ΝΤΑΝΤΑ</Link>
          <Link className="nav-link" to="/contact">ΕΠΙΚΟΙΝΩΝΙΑ</Link>
          <div className="auth-button">
            <button className="login-btn" onClick={() => navigate("/login")}>ΣΥΝΔΕΣΗ</button>
          </div>
        </div>
    </div>
  );
};

export default NavBar;