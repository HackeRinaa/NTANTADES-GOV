import "./completedmessage.css";
import React from "react";
import { Link } from "react-router-dom";
function Completedmessage() {
    return (
        <div className="COMPLETEDMESSAGE">
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
            </div>

             
            <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                    <div className="text-wrapper-4"> ΤΟ ΡΑΝΤΕΒΟΥ ΣΑΣ ΚΑΤΑΧΩΡΗΘΗΚΕ ΜΕ ΕΠΙΤΥΧΙΑ</div>
                </div>
            </div>

            <div className="text-wrapper-5"> Σας έχει σταλεί στο email σας ο σχετικός σύνδεσμος για τo οnline ραντεβού σας.</div>


             
            <div className="overlap-group-wrapper2">
                <div className="overlap-group-3">
                <Link to="/" className="text-wrapper-6">Πίσω</Link>
                </div>

                <div className="overlap-group-4">
                <Link to="/profileparent" className="text-wrapper-7">Το Προφίλ σας</Link>
                </div>
            </div>

        </div>
    );
};
            
export default Completedmessage;