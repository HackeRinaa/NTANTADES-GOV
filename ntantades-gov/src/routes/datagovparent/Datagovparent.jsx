import "./datagovparent.css";
import React from "react";
import { Link } from "react-router-dom";
function Datagovparent() {
    return (
        <div className="DATAGOVPARENT">
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
                    <div className="text-wrapper-4"> Έλεγχος Στοιχείων </div>
                </div>
  
                <div className="overlap-group-3">
                    <div className="text-wrapper-5"> ΜΑΡΙΑ </div>
                    <div className="text-wrapper-6"> Όνομα:</div>
                </div>

                <div className="overlap-group-4">
                    <div className="text-wrapper-5"> ΠΑΠΑΓΕΩΡΓΙΟΥ </div>
                    <div className="text-wrapper-6"> Επώνυμο:</div>
                </div>

                <div className="overlap-group-5">
                    <div className="text-wrapper-5"> 30068000136 </div>
                    <div className="text-wrapper-6"> AMKA:</div>
                </div>

                <div className="overlap-group-6">
                    <div className="text-wrapper-5"> 30004000123 </div>
                    <div className="text-wrapper-6"> ΑΦΜ:</div>
                </div>

                <div className="overlap-group-7">
                    <div className="text-wrapper-5"> Αττική </div>
                    <div className="text-wrapper-6"> Περιοχή:</div>
                </div>

                <div className="overlap-group-8">
                    <div className="text-wrapper-5"> ΗΛΙΟΥΠΟΛΗΣ </div>
                    <div className="text-wrapper-6"> Δήμος:</div>
                </div>

                <div className="overlap-group-9">
                    <div className="text-wrapper-5"> ΕΛ. ΒΕΝΙΖΕΛΟΥ </div>
                    <div className="text-wrapper-6"> Οδός:</div>
                </div>

                <div className="overlap-group-10">
                    <div className="text-wrapper-5"> 43 </div>
                    <div className="text-wrapper-6"> Αριθμός:</div>
                </div>
                
                <div className="overlap-group-11">
                    <div className="text-wrapper-5"> 30 </div>
                    <div className="text-wrapper-6"> Ημερομηνία Γέννησης:</div>
                </div>
                
                <div className="overlap-group-12">
                    <div className="text-wrapper-5"> 6 </div>
                    
                </div>
                <div className="overlap-group-13">
                    <div className="text-wrapper-5"> 1980 </div>
                  
                </div>

            </div>
    


            <div className="overlap-group-14">
                    <div className="text-wrapper-5"> ΑΜΚΑ </div>
                    <div className="text-wrapper-6"> ΑΜΚΑ Τέκνου:</div>
                </div>
                
                <div className="overlap-group-15">
                    <div className="text-wrapper-5">  </div>
                    <div className="text-wrapper-6"> Ημερομηνία Γέννησης:</div>
                </div>
                
                <div className="overlap-group-16">
                    <div className="text-wrapper-5">  </div>
                    
                </div>
                <div className="overlap-group-17">
                    <div className="text-wrapper-5">  </div>
                  
                </div>

                <div className="overlap-group-18">
                    <div className="text-wrapper-5"> Επιλέξτε σχέση </div>
                    <div className="text-wrapper-6"> Σχέση Αιτούντος με Τέκνο:</div>
                </div>

                <div className="overlap-group-19">
                    <div className="text-wrapper-5"> Επιλέξτε δικαιολογητικό </div>
                    <div className="text-wrapper-6"> Επιλέξτε δικαιολογητικό γονικής μέριμνας:</div>
                </div>

                <div className="overlap-group-20">
                    
                    <div className="text-wrapper-5"> Ανεβάστε από τον Υπολογιστή σας</div>
                </div>
            
                
                <div className="overlap-group-wrapper2">
                <div className="overlap-group-21">
                    <Link to="/profileparent" className="text-wrapper-7">Συνέχεια</Link>
                </div>

                    <div className="text-wrapper-8"> Στοιχεία Τέκνου</div>
                </div>
        </div>
            
    );
};
                
export default Datagovparent;