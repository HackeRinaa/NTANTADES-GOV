import "./appointment.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar"; 
import "react-calendar/dist/Calendar.css";
function Appointment() {
    const [selectedTime, setSelectedTime] = useState(""); 

    const times = ["9:00", "9:30", "11:00", "13:00", "13:30"]; 
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date); 
    };
    return (
        <div className="APPOINTMENT">
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

            <div className="text">
                <div className="text-wrapper-4">Κλείστε το Οnline Pαντεβού σας Τώρα</div>
            </div>  

            <div className="text-wrapper-8">Διαθέσιμες Ώρες: </div>

            
            <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                    <Link to="/selectnanny" className="text-wrapper-5">Πίσω</Link>

                </div>
            </div>

            <div className="overlap-group-wrapper2">
                <div className="overlap-group-3">
                    <Link to="/completedmessage" className="text-wrapper-6">Συνέχεια</Link>

                </div>
            </div>
            <div className="overlap-group-wrapper3">
                {times.map((time) => (
                    <button
                        key={time}
                        className={`time-button ${selectedTime === time ? "selected" : ""}`}
                        onClick={() => setSelectedTime(time)}
                    >
                        {time}
                    </button>
                ))}
            </div>
            <div class="circle">19</div>


            
            <div className="calendar-wrapper">
               
                <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    className="custom-calendar"
                />
            </div>

            <div className="text-wrapper-8">Διαθέσιμες Ώρες:</div>
            <div className="overlap-group-wrapper3">
                {times.map((time) => (
                    <button
                        key={time}
                        className={`time-button ${selectedTime === time ? "selected" : ""}`}
                        onClick={() => setSelectedTime(time)}
                    >
                        {time}
                    </button>
                ))}
            </div>
            <div className="selected-info">
                <p>
                    <strong>Επιλεγμένη Ημερομηνία:</strong> {selectedDate.toLocaleDateString("el-GR")}
                </p>
                {selectedTime && (
                    <p>
                        <strong>Επιλεγμένη Ώρα:</strong> {selectedTime}
                    </p>
                )}
            </div>
           

            
        </div>
    );
};
            
export default Appointment;