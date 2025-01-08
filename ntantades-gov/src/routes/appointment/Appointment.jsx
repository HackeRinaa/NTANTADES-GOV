import { useState } from "react";
import "./appointment.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Appointment() {

    // State for selected date and time
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes] = useState(["9:00", "9:30", "11:00", "13:00", "17:00"]); // Dummy time data
  const [selectedTime, setSelectedTime] = useState("");

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Handle time selection
  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="Appointment">
        <div className="div">
            <div className="NAV">
                <div className="text-wrapper-3">govgr</div>
                <div className="navbar">
                    <a className="text-wrapper-4" href="#home">ΑΡΧΙΚΗ</a>
                    <a className="text-wrapper-4" href="#drash">Η ΔΡΑΣΗ</a>
                    <a className="text-wrapper-4" href="#goneas">ΓΟΝΕΑΣ</a>
                    <a className="text-wrapper-4" href="#ntanta">ΝΤΑΝΤΑ</a>
                    <a className="text-wrapper-4" href="#epikoinonia">ΕΠΙΚΟΙΝΩΝΙΑ</a>
                    <div className="frame">
                        <div className="overlap-group">
                            <a className="text-wrapper-5" href="#sindesi">ΣΥΝΔΕΣΗ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="appointment-container">
        <h2>Κλείσε το Online Ραντεβού σου Τώρα</h2>

        {/* Calendar Section */}
        <div className="calendar-section">
            <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            dateFormat="dd/MM/yyyy"
            />

            {/* Time Section */}
            <div className="time-section">
            <h3>
                Διαθέσιμες Ώρες: {selectedDate ? selectedDate.toLocaleDateString() : ""}
            </h3>
            <div className="time-options">
                {availableTimes.map((time, index) => (
                <button
                    key={index}
                    className={`time-button ${selectedTime === time ? "active" : ""}`}
                    onClick={() => handleTimeSelection(time)}
                >
                    {time}
                </button>
                ))}
            </div>
            </div>
        </div>

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
            <button className="back-button">Πήγαινε Πίσω</button>
            <button className={`continue-button ${selectedTime ? "active-btn" : ""}`} disabled={!selectedTime}>
            Συνέχεια
            </button>
        </div>
        </div>

    </div>
  )
}

export default Appointment;