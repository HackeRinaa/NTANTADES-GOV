import "./navBar.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Check user's authentication state
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // Set login state based on user existence
    });
    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  // Handle logout
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false); // Reset login state
        navigate("/"); // Navigate to the homepage
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

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
          {isLoggedIn ? (
            <button className="login-btn" onClick={handleLogout}>
              ΑΠΟΣΥΝΔΕΣΗ
            </button>
          ) : (
            <button className="login-btn" onClick={() => navigate("/login")}>
              ΣΥΝΔΕΣΗ
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
