import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import "./goneasProfile.css"
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../backend/firebase";
import { getAuth } from "firebase/auth";




function GoneasProfile() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    contactHours: "",
    notes: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleFileChange = async (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     try {
  //       const storageRef = ref(storage, `profile-pictures/${file.name}`);
  //       await uploadBytes(storageRef, file);
  //       const downloadURL = await getDownloadURL(storageRef);
  //       setFormData({ ...formData, profilePicture: downloadURL });
  //       console.log("Profile picture uploaded successfully:", downloadURL);
  //     } catch (error) {
  //       console.error("Error uploading profile picture:", error);
  //     }
  //   }
  // };
  

  const handleSubmit = async () => {
          try {
              const auth = getAuth(); // Get Firebase Auth instance
              const user = auth.currentUser; // Get the currently signed-in user
              
              if (!user) {
                  throw new Error("No user is signed in.");
              }
  
              const userId = user.uid; // Get the user's unique ID
              const userDoc = doc(db, "users", userId);
  
              await setDoc(userDoc, { parentDetails: formData }, { merge: true });
  
              // Navigate to the next page
              navigate("/profile-parent");
          } catch (error) {
              console.error("Error saving data:", error);
          }
      };
  

  return (
    <div className="GoneasProfile">
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
            <label htmlFor="contact-hours">Ώρες Φύλαξης:</label>
            <select id="contact-hours" value={formData.contactHours} onChange={(e) => setFormData({...formData, contactHours: e.target.value })}>
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

          {/* <div className="form-item profile-picture">
            <label htmlFor="profile-picture">Φωτογραφία Προφίλ:</label>
            <input 
              type="file" 
              id="profile-picture"
              name="profile"
              onChange={handleFileChange}
            />
          </div> */}
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

export default GoneasProfile;