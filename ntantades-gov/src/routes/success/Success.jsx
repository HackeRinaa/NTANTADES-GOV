import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import "./success.css";

function Success() {

    const navigate = useNavigate();
  return (
    <div className="Success">
        <NavBar/>
        <div className="success-container">
            <div className="success-message">
                ΤΟ ΡΑΝΤΕΒΟΥ ΣΑΣ ΚΑΤΑΧΩΡΗΘΗΚΕ ΜΕ ΕΠΙΤΥΧΙΑ
            </div>
            <p>Σας έχει σταλεί στο email σας ο σχετικός σύνδεσμος για το online ραντεβού σας.
            </p>
            <div className="buttons">
                <button className="back-button-suc" onClick={() => navigate('/')}>ΠΗΓΑΙΝΕ ΣΤΗΝ ΑΡΧΙΚΗ</button>
                <button className="profile-button-suc" onClick={() => navigate('/profile-ntanta')}>ΠΡΟΦΙΛ ΜΟΥ</button>
            </div>
        </div>
    </div>
  );
}

export default Success;