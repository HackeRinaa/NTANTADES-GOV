import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import "./ntantaProfile.css";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../backend/firebase";

function NtantaProfile() {

  const navigate = useNavigate();
  const [nannyDetails, setNannyDetails] = useState(null);
  const [userName, setUserName] = useState("Φόρτωση..."); // Default text while loading
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [note, setNote] = useState("");


  useEffect(() => {
    const fetchNannyDetails = async () => {
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
          const details = data.nannyDetails || {};
          setNannyDetails(details);

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
        console.error("Error fetching nanny details:", error);
      }
    };

    fetchNannyDetails();
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

      // Update only the `description` field in the nannyDetails` object
      await updateDoc(userDoc, {
        "nannyDetails.description": note,
      });

      // Update state and exit edit mode
      setNannyDetails((prev) => ({ ...prev, description: note }));
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  if (!nannyDetails) {
    return <p>Φόρτωση προφίλ...</p>;
  }
  return (
    <div className="NtantaProfile">
      <NavBar/>
      <div className="main-container-profile">
        <div className="profile-container">
            <h2 className="title">Το Προφίλ μου</h2>
            <div className="row-info">
              <img src="/profile-ntanta.avif" className="profile-pic" alt="" />
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
                {nannyDetails.notes || "Δεν υπάρχουν λεπτομέρειες διαθέσιμες."}
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

export default NtantaProfile;