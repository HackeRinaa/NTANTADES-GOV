import NavBar from "../../components/navBar/NavBar";
import "./parentProfile.css";

function ParentProfile() {
  return (
    <div className="ParentProfile">
      <NavBar/>
      <div className="main-container-profile">
        <div className="profile-container">
            <h2 className="title">Το Προφίλ μου</h2>
            <div className="row-info">
              <img src="/girl.png" className="profile-pic" alt="" />
              <div className="container-info-profile">
                <h3>Μαρία Παπαγεωργίου</h3>
                <div className="lines">
                  <img src="/mail.png" className="icon" alt="mail icon" />
                  <p>maria.papageorgiou@gmail.com</p>
                </div>
                <div className="lines">
                  <img src="/phone-call.png" className="icon" alt="phone icon" />
                  <p>6987853459</p>  
                </div>
                
              </div>
            </div>
            <div className="row-info">
              <p className="details">Είμαστε εργαζόμενοι γονείς με ένα 2χρονο κοριτσάκι 
                και χρειαζόμαστε φύλαξη τις πρωινές ώρες
                (9:00-17:00) από Δευτέρα έως Παρασκευή.
                Αναζητούμε έναν/μία φροντιστή που
                να είναι στοργικός/ή και υπεύθυνος/η.
              </p>
            </div>
            <div className="row-info">
              <button className="btn">Επεξεργασία</button>
            </div>
        </div>
        <div className="options">
          <button className="option">Τα Ραντεβού Μου</button>
          <button className="option">Οι Αξιολογήσεις Μου</button>
          <button className="option">Τα Μηνύματα Μου</button>
          <button className="option">Τα Voucher Μου</button>
          <button className="option">Ιστορικό Αιτήσεων και Συμφωνητικών</button>
        </div>
      </div>
    </div>
  )
}

export default ParentProfile;