import "./cvoverlay.css";
import React from "react";
import { Link } from "react-router-dom";
function Cvoverlay() {
    return (
        <div className="CVOVERLAY">
            <div className="div">
                <div className="NAV">
                 <Link to="/" className="text-wrapper">govgr</Link>
        
                  <div className="navbar">
                    <Link to="/" className="text-wrapper-2">ΑΡΧΙΚΗ</Link>
            
                    <Link to="/drash" className="text-wrapper-2">Η ΔΡΑΣΗ</Link>

                    <Link to="/goneas" className="text-wrapper-2">ΓΟΝΕΑΣ</Link>

                    <Link to="/ntanta" className="text-wrapper-2">ΝΤΑΝΤΑ</Link>

                    <Link to="/" className="text-wrapper-2">ΕΠΙΚΟΙΝΩΝΙΑ</Link>

                    <div className="frame">
                        <div className="overlap-group">
                            <Link to="/login" className="text-wrapper-3">ΣΥΝΔΕΣΗ</Link>
                        </div>
                    </div>
                    </div>
                </div>


                <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                    <Link to="/appointment" className="text-wrapper-6">Κλείστε Ραντεβού</Link>
                </div>
                </div>




                <div className="overlap-group-wrapper1">
                <div className="overlap-group-3">
                    <div className="text-wrapper-7"> Γεια σας! Ονομάζομαι Σοφία, είμαι 21 ετών και λατρεύω να <br />
                     δουλεύω με παιδιά. Έχω εμπειρία στη φροντίδα και <br />
                     δημιουργική απασχόληση παιδιών διαφόρων ηλικιών, ενώ <br />
                     δίνω πάντα προτεραιότητα στην ασφάλεια, την ανάπτυξη και <br />
                     τη χαρά τους. Είμαι υπεύθυνη, υπομονετική και μου αρέσει να <br />
                     βρίσκω διασκεδαστικούς και εκπαιδευτικούς τρόπους να <br />
                     περνάμε τον χρόνο μας. Ανυπομονώ να σας γνωρίσω και να <br />
                     γίνω μέρος της καθημερινότητάς σας! </div>
                </div>
                </div>




                <div className="text">
                    <div className="row">
                        <div className="text-wrapper-8">Όνομα:</div>
                        <div className="text-wrapper-8">Επώνυμο:</div>
                    </div>
                    <div className="row">
                        <div className="text-wrapper-8">Ηλικία:</div>
                        <div className="text-wrapper-8">Email:</div>
                    </div>
                    <div className="row">
                        <div className="text-wrapper-8">Τηλέφωνο Επικοινωνίας:</div>
                        <div className="text-wrapper-8">Φύλο:</div>
                    </div>
                    <div className="row">
                        <div className="text-wrapper-8">Σημείωμα:</div>
                    </div>
                </div>


                <div className="text2">
                    <div className="row">
                        <div className="text-wrapper-9">Μαρία</div>
                        <div className="text-wrapper-9">Παπαγεωργίου</div>
                    </div>
                    <div className="row">
                        <div className="text-wrapper-9">21</div>
                        <div className="text-wrapper-9">maria.papageo@gmail.com</div>
                    </div>
                    <div className="row">
                        <div className="text-wrapper-9">6976234568</div>
                        <div className="text-wrapper-9"> Γυναίκα</div>
                    </div>
                    
                </div>
    
                <div className="overlap-group-wrapper3">
                <div className="overlap-group-4">
                    <Link to="/" className="text-wrapper-10">Πίσω</Link>
                </div>
                </div>

                <img
                className="screenshot1"
                alt="Screenshot1"
                src="../public/nan2.png"
                />

            </div>
        </div>
                
    );
};
        
export default Cvoverlay;