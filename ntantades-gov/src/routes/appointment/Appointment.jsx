import "./appointment.css";

function Appointment() {
    return (
        <div className="APPOINTMENT">
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

            <div className="text">
                <div className="text-wrapper-4">Κλείστε το Οnline Pαντεβού σας Τώρα</div>
            </div>  

            <div className="text-wrapper-8">Διαθέσιμες Ώρες: </div>

            
            <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                    <div className="text-wrapper-5"> Πίσω </div>
                </div>
            </div>

            <div className="overlap-group-wrapper2">
                <div className="overlap-group-3">
                    <div className="text-wrapper-6"> Συνέχεια </div>
                </div>
            </div>

            <div className="overlap-group-wrapper3">
                <div className="overlap-group-4">
                    <div className="text-wrapper-7"> 9:00 </div>
                </div>

                <div className="overlap-group-4">
                    <div className="text-wrapper-7"> 9:30 </div>
                </div>

                <div className="overlap-group-4">
                    <div className="text-wrapper-7"> 11:00 </div>
                </div>

                <div className="overlap-group-4">
                    <div className="text-wrapper-7"> 13:00 </div>
                </div>

                <div className="overlap-group-4">
                    <div className="text-wrapper-7"> 13:30 </div>
                </div>
            </div>

            <div class="circle">19</div>

            <img
                className="screenshot1"
                alt="Screenshot1"
                src="../public/calender.png"
            />
        </div>
    );
};
            
export default Appointment;