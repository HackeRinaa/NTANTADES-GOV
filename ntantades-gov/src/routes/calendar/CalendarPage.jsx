import { useEffect, useState } from "react";
import "./calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "../../components/navBar/NavBar";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../backend/firebase";

function CalendarPage() {
  const navigate = useNavigate();

  const [userRole, setUserRole] = useState(null);

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

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid)); // Adjust the collection name if needed
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserRole(userData.role); // Assuming the role is stored as `role` in the user document
        }
      } else {
        navigate("/login"); // Redirect to login if no user is logged in
      }
    });
  }, [navigate]);
  
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
        <div className="main-container-calendar">

            
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
          {/* New Appointment Button */}
          {userRole === "parent" && (
          <div className="new-appointment-btn-container">
            <button
              className="new-appointment-btn"
              onClick={() => navigate("/select-neighborhood")}
            >
              Κλείσε Νέο Ραντεβού
            </button>
          </div>
        )}
        </div>
    </div>
  )
}

export default CalendarPage;