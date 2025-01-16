import { useNavigate } from "react-router-dom"
import NavBar from "../../components/navBar/NavBar"
import "./cvTemplate.css"
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../backend/firebase";

function CvTemplate() {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    contactHours: "",
    notes: "",
    profilePicture: null,
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = async () => {
    try {
      const userId = "USER_ID"; // Replace with actual user ID from Firebase Auth
      const userDoc = doc(db, "users", userId);

      // Save data to Firestore
      await setDoc(userDoc, { profileDetails: formData }, { merge: true });

      navigate("/profile-ntanta");
    } catch (error) {
      console.error("Error saving profile data:", error);
    }
  };

  return (
    <div className="CvTemplate">
        <NavBar/>
        <div className="profile-completion-container">

      <div className="form-grid">
      <div className="headers">
            <h1 className="title">Σχεδόν Τελειώσαμε..</h1>
            <p className="subtitle">Εισάγετε αυτές τις πληροφορίες για εσάς, για να ολοκληρώσετε το προφίλ σας.</p>
            </div>
        <div className="form-item">
          <label htmlFor="email">Email:</label>
          <input 
              className="input" 
              type="email" 
              id="email" 
              placeholder="Εισάγετε το email σας" 
              name="email"
              value={formData.email}
              onChange={handleChange}
          />
        </div>

        <div className="form-item">
          <label htmlFor="phone">Τηλέφωνο Επικοινωνίας:</label>
          <input 
              className="input" 
              type="tel" 
              id="phone" 
              placeholder="Εισάγετε το κινητό σας" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
        </div>

        <div className="form-item">
          <label htmlFor="contact-hours">Ώρες Επικοινωνίας:</label>
          <select id="contact-hours" value={formData.contactHours} onChange={handleChange}>
            <option value="">Επιλέξτε ώρες</option>
            <option value="morning">Πρωί</option>
            <option value="afternoon">Απόγευμα</option>
            <option value="evening">Βράδυ</option>
          </select>
        </div>

        <div className="form-item">
          <label htmlFor="notes">Προσωπικό Σημείωμα:</label>
          <textarea 
              className="input" 
              id="notes" 
              placeholder="Γράψτε λίγα λόγια για εσάς και τις ανάγκες της οικογένειας σας"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
        </div>

        <div className="form-item profile-picture">
          <label htmlFor="profile-picture">Φωτογραφία Προφίλ:</label>
          <input 
              type="file" 
              id="profile-picture"
              name="profile"
              onChange={handleFileChange}
          />
        </div>
      </div>

        <div className="left-section">
            <div className="main-pic">
                <img src="/image 6.png" alt="" />
            </div>
            <button className="complete-button" onClick={handleSubmit}>Ολοκλήρωση</button>
        </div>
    </div>

    </div>
  )
}

export default CvTemplate