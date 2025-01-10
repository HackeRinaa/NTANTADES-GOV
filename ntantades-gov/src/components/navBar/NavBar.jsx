import "./navBar.css";

function NavBar() {
  return (
    <div className="NavBar">
        <div className="logo">
          govgr
        </div>
        <div className="navbar">
          <a className="nav-link" href="#home">ΑΡΧΙΚΗ</a>
          <a className="nav-link" href="#drash">Η ΔΡΑΣΗ</a>
          <a className="nav-link" href="#goneas">ΓΟΝΕΑΣ</a>
          <a className="nav-link" href="#ntanta">ΝΤΑΝΤΑ</a>
          <a className="nav-link" href="#epikoinonia">ΕΠΙΚΟΙΝΩΝΙΑ</a>
          <div className="auth-button">
            <button className="login-btn" href="#sindesi">ΣΥΝΔΕΣΗ</button>
          </div>
        </div>
    </div>
  );
};

export default NavBar;