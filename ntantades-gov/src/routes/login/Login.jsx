
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import "./login.css";

const Login = () => {

  const navigate = useNavigate();

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
              type="text"
              id="username"
              placeholder="Όνομα Χρήστη"
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Κωδικός:</label>
            <input
              type="password"
              id="password"
              placeholder="Κωδικός"
              className="input-field"
            />
          </div>
          <button type="submit" className="login-button" onClick={() => navigate('/goneas-gov')}>Σύνδεση</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
