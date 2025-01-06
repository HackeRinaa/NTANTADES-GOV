import "./profileparent.css";

function Profileparent() {
    return (
        <div className="PROFILEPARENT">
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
              
            <img
                className="screenshot1"
                alt="Screenshot1"
                src="../public/profparent2.png"
            />
            
            <img
                className="screenshot2"
                alt="Screenshot2"
                src="../public/prof.png"
            />

            <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                    <div className="text-wrapper-4"> Ολοκλήρωση </div>
                </div>
            </div>

            <div className="text-wrapper-10"> Φωτογραφία Προφίλ: </div>
            <div className="overlap-group-wrapper2">
                <div className="overlap-group-7">
                    <div className="text-wrapper-9"> Ανέβασε </div>
                </div>
            </div>


            <div className="text">
                <div className="text-wrapper-5">Σχεδόν Τελειώσαμε..</div>
            </div>     
            <div className="text-wrapper-6">Εισάγετε αυτές τις πληροφορίες για εσάς,<br />
            για να ολοκληρώσετε το προφίλ σας. </div>

            <div className="overlap-group-3">
                    <div className="text-wrapper-7"> Εισάγετε το email σας </div>
                    <div className="text-wrapper-8"> Email:</div>
            </div>

            <div className="overlap-group-4">
                    <div className="text-wrapper-7"> Εισάγετε το κινητό σας </div>
                    <div className="text-wrapper-8"> Τηλέφωνο Επικοινωνίας:</div>
            </div>

            <div className="overlap-group-5">
                    <div className="text-wrapper-7"> Επιλέξτε  ώρες</div>
                    <div className="text-wrapper-8"> Ώρες Φύλαξης :</div>
            </div>
            <div className="overlap-group-6">
                    <div className="text-wrapper-7"> Γράψτε λίγα λόγια για εσάς και τις
                    ανάγκες τις <br />οικογένειας σας </div>
                    <div className="text-wrapper-8"> Προσωπικό Σημείωμα :</div>
            </div>

        </div>
            
    );
};
                
export default Profileparent;