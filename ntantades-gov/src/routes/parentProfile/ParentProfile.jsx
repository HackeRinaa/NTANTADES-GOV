import { useEffect, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./parentProfile.css";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../backend/firebase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ParentProfile() {
  const navigate = useNavigate();
  const [parentDetails, setParentDetails] = useState(null);
  const [userName, setUserName] = useState("Φόρτωση..."); // Default text while loading
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    const fetchParentDetails = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
          console.error("No user is signed in.");
          return;
        }

        const userDoc = doc(db, "users", user.uid);
        const docSnapshot = await getDoc(userDoc);

        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          const details = data.parentDetails || {};
          setParentDetails(details);

          // Set user-specific fields if available
          const name = `${details.firstName} ${details.lastName}`
          setUserName(name || "Άγνωστο Όνομα");
          setEmail(user.email || "Άγνωστο Email");
          setPhone(details.phone || "Άγνωστο Τηλέφωνο");
          setNote(details.notes || "");
        } else {
          console.error("No user data found in Firestore.");
        }
      } catch (error) {
        console.error("Error fetching parent details:", error);
      }
    };

    fetchParentDetails();
  }, []);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleSave = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.error("No user is signed in.");
        return;
      }

      const userDoc = doc(db, "users", user.uid);

      // Update only the `description` field in the `parentDetails` object
      await updateDoc(userDoc, {
        "parentDetails.description": note,
      });

      // Update state and exit edit mode
      setParentDetails((prev) => ({ ...prev, description: note }));
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  if (!parentDetails) {
    return <p>Φόρτωση προφίλ...</p>;
  }

  return (
    <div className="ParentProfile">
      <NavBar/>
      <div className="main-container-profile">
        <div className="profile-container">
            <h2 className="title">Το Προφίλ μου</h2>
            <div className="row-info">
              <img src="/profile-parent.png" className="profile-pic" alt="" />
              <div className="container-info-profile">
                <h3>{userName}</h3>
                <div className="lines">
                  <img src="/mail.png" className="icon" alt="mail icon" />
                  <p>{email}</p>
                </div>
                <div className="lines">
                  <img src="/phone-call.png" className="icon" alt="phone icon" />
                  <p>{phone}</p>  
                </div>
                
              </div>
            </div>
            <div className="row-info">
            {isEditing ? (
              <textarea
                value={note}
                onChange={handleNoteChange}
                className="edit-textarea"
              />
            ) : (
              <p className="details">
                {parentDetails.notes || "Δεν υπάρχουν λεπτομέρειες διαθέσιμες."}
              </p>
            )}
            </div>
            <div className="row-info">
            {isEditing ? (
              <button className="btn" onClick={handleSave}>
                Αποθήκευση
              </button>
            ) : (
              <button className="btn" onClick={handleEditToggle}>
                Επεξεργασία
              </button>
            )}
            </div>
        </div>
        <div className="options">
          <button className="option" onClick={() => navigate('/calendar')}>Τα Ραντεβού Μου</button>
          <button className="option" onClick={() => navigate('/ratings')}>Οι Αξιολογήσεις Μου</button>
          <button className="option" onClick={() => navigate('/chat')}>Τα Μηνύματα Μου</button>
          <button className="option" onClick={() => navigate('/voucher')}>Τα Voucher Μου</button>
          <button className="option" onClick={() => navigate('/contracts')}>Ιστορικό Αιτήσεων και Συμφωνητικών</button>
        </div>
      </div>
    </div>
  )
}

export default ParentProfile;