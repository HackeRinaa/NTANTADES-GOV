import "./login.css";
import React from "react";
import { Link } from "react-router-dom";
function Login() {
    return (
        <div className="LOGIN">
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
                    <div className="text-wrapper-4"> Σύνδεση </div>
                    <div className="text-wrapper-5"> Παρακαλώ εισάγετε τους κωδικούς σας στο TaxisNet για να συνδεθείτε </div>

                    <div className="text-wrapper-6"> Όνομα Χρήστη: </div>
                    <div className="overlap-group-3">
                        <div className="text-wrapper-7"> Όνομα Χρήστη </div>
                    </div>

                    <div className="text-wrapper-8"> Κωδικός: </div>
                    <div className="overlap-group-4">
                        <div className="text-wrapper-9"> Κωδικός </div>
                    </div>
    
                    <div className="overlap-group-5">
                        <div className="text-wrapper-10"> Σύνδεση </div>
                    </div>


                    <img
                        className="screenshot1"
                        alt="Screenshot1"
                        src="../public/loggo1-removebg.png"
                    />
                    <img
                        className="screenshot2"
                        alt="Screenshot2"
                        src="../public/loggo2-removebg.png"
                    />
                </div>
            </div>



        </div>
                
    );
};
        
export default Login;  