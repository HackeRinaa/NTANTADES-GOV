import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../backend/firebase";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Fetch user role from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const role = userDoc.data()?.role;
  
      if (role === "parent") {
        navigate("/profile-parent");
      } else if (role === "nanny") {
        navigate("/profile-ntanta");
      } else {
        alert("User role not defined.");
      }
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };
  

  return (
    <div className="Login">
      <NavBar />
      <main className="login-container">
        <div className="login-header">
          <img
            src="logo_ggps.png"
            alt="GSIS Logo"
            className="logo-left"
          />
          <img
            src="logo_el.png"
            alt="Hellenic Republic Logo"
            className="logo-right"
          />
        </div>
        <h2>Σύνδεση</h2>
        <p>Παρακαλώ εισάγετε τους κωδικούς σας στο TaxisNet για να συνδεθείτε</p>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Χρήστης:</label>
            <input
              type="email"
              id="username"
              value={email}
              placeholder="Email"
              className="input-field"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Κωδικός:</label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Κωδικός"
              className="input-field"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button" onClick={handleLogin}>Σύνδεση</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
