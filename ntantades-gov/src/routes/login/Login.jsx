import "./login.css";

function Login() {
    return (
        <div className="LOGIN">
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