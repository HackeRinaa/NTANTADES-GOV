import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import "./ntantaProfile.css";

function NtantaProfile() {

  const navigate = useNavigate();

  return (
    <div className="NtantaProfile">
      <NavBar/>
      <div className="main-container-profile">
        <div className="profile-container">
            <h2 className="title">Το Προφίλ μου</h2>
            <div className="row-info">
              <img src="/girl.png" className="profile-pic" alt="" />
              <div className="container-info-profile">
                <h3>Σοφία Παπαγεωργίου</h3>
                <div className="lines">
                  <img src="/mail.png" className="icon" alt="mail icon" />
                  <p>sofia.papageo@gmail.com</p>
                </div>
                <div className="lines">
                  <img src="/phone-call.png" className="icon" alt="phone icon" />
                  <p>6987853459</p>  
                </div>
                
              </div>
            </div>
            <div className="row-info">
              <p className="details">Γεια σας! Ονομάζομαι Σοφία, είμαι 23 ετών και λατρεύω να δουλεύω με παιδιά.Έχω εμπειρία στη φροντίδα και δημιουργική απασχόληση παιδιών διαφόρων ηλικιών, ενώ δίνω πάντα προτεραιότητα στην ασφάλεια, την ανάπτυξη και τη χαρά τους. Είμαι υπεύθυνη, υπομονετική και μου αρέσει να βρίσκω διασκεδαστικούς και εκπαιδευτικούς
              </p>
            </div>
            <div className="row-info">
              <button className="btn">Επεξεργασία</button>
            </div>
        </div>
        <div className="options">
          <button className="option" onClick={() => navigate('/calendar')}>Τα Ραντεβού Μου</button>
          <button className="option" onClick={() => navigate('/ratings')}>Οι Αξιολογήσεις Μου</button>
          <button className="option" onClick={() => navigate('/chat')}>Τα Μηνύματα Μου</button>
          <button className="option" onClick={() => navigate('/voucher')}>Τα Voucher Μου</button>
          <button className="option" onClick={() => navigate('/contracts')}>Ιστορικό Αιτήσεων και Συμφωνητικών</button>
        </div>
      </div>
    </div>
  )
}

export default NtantaProfile;