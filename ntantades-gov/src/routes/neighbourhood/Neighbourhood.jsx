import "./neighbourhood.css";

function Neighbourhood() {
    return (
        <div className="HERO-SECTION">
            <div className="div">
                <div className="NAV">
                  <div className="text-wrapper">govgr</div>
        
                  <div className="navbar">
                        <div className="text-wrapper-2">ΑΡΧΙΚΗ</div>
            
                        <div className="text-wrapper-2">Η ΔΡΑΣΗ</div>
            
                        <div className="text-wrapper-2">ΓΟΝΕΑΣ</div>
            
                        <div className="text-wrapper-2">ΝΤΑΝΤΑ</div>
            
                        <div className="text-wrapper-2">ΕΠΙΚΟΙΝΩΝΙΑ</div>
            
                        <div className="frame">
                            <div className="overlap-group">
                                <div className="text-wrapper-3">ΣΥΝΔΕΣΗ</div>
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
                    <div className="text-wrapper-7"> Βρές Νταντά</div>
                    </div>

                    
                </div>
                </div>

                
                <div className="group2">
                    <div className="overlap-group-wrapper2">
                        <div className="overlap-group-3">
                            <div className="text-wrapper-8"> Διαλέξτε Περιοχή</div>
                        </div>
                    </div>

                    <div className="overlap-group-wrapper3">
                    <div className="overlap-group-4">
                        <div className="text-wrapper-9"> Διαλέξτε Δήμο</div>
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