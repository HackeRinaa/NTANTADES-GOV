import "./contact.css";
import NavBar from "../../components/navBar/NavBar";

function Contact() {
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
                <button className="btn">ΠΗΓΑΙΝΕ ΠΙΣΩ</button>
                <img src="/contact=img.png" alt="" />
            </div>
        </div>
    </div>
  );
}

export default Contact;