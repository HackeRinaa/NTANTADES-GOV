import "./neighbourhood.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Neighbourhood() {
    const [region, setRegion] = useState(""); 
    const [municipality, setMunicipality] = useState(""); 
    return (
        <div className="NEIGHBOURHOOD">
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
                <div className="text">
                <div className="text-wrapper-4">Αναζήτηση Ανά Γειτονία</div>
                </div>     
                <div className="text-wrapper-5">Περιοχή </div>
                <div className="text-wrapper-6">Δήμος </div>
                
                <div className="group">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                    <Link to="/selectnanny" className="text-wrapper-7">Βρείτε Νταντά</Link>
                    
                    </div>

                    
                </div>
                </div>

                <div className="group2">
                    <div className="overlap-group-wrapper2">
                        <div className="overlap-group-3">
                            <input 
                                type="text" 
                                className="text-input" 
                                placeholder="Διαλέξτε Περιοχή"
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="overlap-group-wrapper3">
                        <div className="overlap-group-4">
                            <input 
                                type="text" 
                                className="text-input" 
                                placeholder="Διαλέξτε Δήμο"
                                value={municipality}
                                onChange={(e) => setMunicipality(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <img
                className="screenshot"
                alt="Screenshot"
                src="../public/neighbourhood.png"
                />

            </div>
                

        </div>
    
);
};
        
export default Neighbourhood;