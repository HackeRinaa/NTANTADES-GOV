import { useState } from "react";
import "./calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../../components/navBar/NavBar";
import { useNavigate } from "react-router-dom";


function CalendarPage() {
  const navigate = useNavigate();

  const CalendarData = [
    {
      id: 1,
      time: "9:00",
      date: "Ραντεβού με Παπαδοπούλου Μαρία"
    },
    {
      id: 2,
      time: "10:00",
      date: "Ραντεβού με Χριστοδούλου Μάρκος"
    },
    {
      id: 3,
      time: "12:00",
      date: "Ραντεβού με Κωνσταντινίδη"
    },
  ]
  
  const [selectedDate, setSelectedDate] = useState(null);


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
    <div className="Calendar">
        <NavBar />
        <div className="backbtn" onClick={() => navigate('/profile-ntanta')}>
                <button className="btn">Το Προφίλ Μου</button>
        </div>
        <div className="calendar-container">
        <h2>Το Ημερολόγιο Μου</h2>

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
                Ραντεβού : {selectedDate ? selectedDate.toLocaleDateString() : ""}
            </h3>
            <div className="time-options">
                {CalendarData.map((date) => (
                <button
                    key={date.index}
                    className={`time-button ${selectedTime === date.time ? "active" : ""}`}
                    onClick={() => handleTimeSelection(date.time)}
                >
                    {date.time} : {date.date}
                </button>
                ))}
            </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default CalendarPage;