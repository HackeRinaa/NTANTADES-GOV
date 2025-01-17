import { useNavigate } from "react-router-dom";
import "./contact.css";
import NavBar from "../../components/navBar/NavBar";



function Contact() {
  const navigate = useNavigate();

  return (
    <div className="Contact">
        <NavBar/>
        <div className="contact-container">
            <div className="headers-contact">
                <h2 className="title-contact">Για δυσκολίες ή παρατηρήσεις παρακαλούμε επικοινωνήστε 
                με τα τηλέφωνα:2103258080 - 2103258090
                ή στείλτε μήνυμα στην ηλεκτρονική διεύθυνση ntantades@yeka.gr .
                </h2>
            </div>
            <div className="row">
              <div className="btns">
                <button className="activeBtn" onClick={() => navigate('/')}>ΠΗΓΑΙΝΕ ΠΙΣΩ</button>
              </div>
              <img src="/contact=img.png" alt="" />
            </div>
        </div>
    </div>
  );
}

export default Contact;