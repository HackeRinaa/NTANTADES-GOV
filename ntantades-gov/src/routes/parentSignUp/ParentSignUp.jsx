import { useState } from "react";
import { auth, db } from "../../../backend/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import NavBar from "../../components/navBar/NavBar";
import "./parentSignUp.css";
import { useNavigate } from "react-router-dom";

const ParentSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        role: "parent",
      });

      alert("Parent account created successfully!");
      navigate('/goneas-gov');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="ParentSignUp">
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
        <h2>Εγγραφή ως Γονέας</h2>
        <p>Παρακαλώ εισάγετε το όνομα, email και κωδικό για την εγγραφή σας στο Μητρώο ως Γονέας</p>
        <form className="login-form" onSubmit={handleSignup}> {/* Move onSubmit to the form */}
          <div className="form-group">
            <label htmlFor="username">Όνομα:</label>
            <input
              type="text"
              value={name}
              placeholder="Όνομα"
              className="input-field"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="username">Email:</label>
            <input
              type="email"
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
              value={password}
              placeholder="Κωδικός"
              className="input-field"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">Εγγραφή</button> {/* Remove onClick from button */}
        </form>
      </main>
    </div>
  );
};

export default ParentSignup;