import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import "./ntantaGov.css";
import { useRef, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../backend/firebase";


function NtantaGov() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    
        
          // State to hold form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        amka: "",
        afm: "",
        region: "",
        municipality: "",
        street: "",
        streetNumber: "",
        studiesCertificate: "",
        healthCertificate: "",
        firstAid: "",
        criminalRecord: "",
        hosting: "",
    });

    
    const [adultBirthDay, setAdultBirthDay] = useState("");
    const [adultBirthMonth, setAdultBirthMonth] = useState("");
    const [adultBirthYear, setAdultBirthYear] = useState("");

    const handleAdultBirthDateChange = () => {
        const fullDate = `${adultBirthYear}-${adultBirthMonth.padStart(2, "0")}-${adultBirthDay.padStart(2, "0")}`;
        setFormData({ ...formData, birthDate: fullDate });
      };

    const handleFileChange = (event) => {
        const fileName = event.target.files[0] ? event.target.files[0].name : '';
        console.log(fileName); // You can handle the file name as needed
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async () => {
        try {
          const userId = "USER_ID"; // Replace with actual user ID from Firebase Auth
          const userDoc = doc(db, "users", userId);
    
          // Save data to Firestore
          await setDoc(userDoc, { parentDetails: formData }, { merge: true });
    
          // Navigate to the next page
          navigate("/cv-template");
        } catch (error) {
          console.error("Error saving data:", error);
        }
      };

  return (
    <div className='NtantaGov'>
        <NavBar/>
        <div className="container">
        <div className="data-1">
                <p className="header">Ελεγχος Στοιχείων</p>
                <div className="row">
                    <div className="column">
                        <p className="fieldName">Όνομα</p>
                        <input 
                            className="input" 
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="column">
                        <p className="fieldName">Επώνυμο</p>
                        <input 
                            className="input" 
                            type="text" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                    <p className="fieldName">Ημερομηνία Γέννησης</p>
                        <div className="date">
                            <input 
                                className="input2" 
                                type="text" 
                                placeholder="DD"
                                value={adultBirthDay}
                                onChange={(e) => setAdultBirthDay(e.target.value)}
                                onBlur={handleAdultBirthDateChange}
                            />
                            <input 
                                className="input2" 
                                type="text" 
                                placeholder="MM"
                                value={adultBirthMonth}
                                onChange={(e) => setAdultBirthMonth(e.target.value)}
                                onBlur={handleAdultBirthDateChange}
                            />
                            <input 
                                className="input3" 
                                type="text" 
                                placeholder="YYYY"
                                value={adultBirthYear}
                                onChange={(e) => setAdultBirthYear(e.target.value)}
                                onBlur={handleAdultBirthDateChange}
                            />
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <p className="fieldName">AMKA</p>
                        <input 
                            className="input" 
                            type="text" 
                            name="amka"
                            value={formData.amka}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="column">
                        <p className="fieldName">ΑΦΜ</p>
                        <input 
                            className="input" 
                            type="text" 
                            name="afm"
                            value={formData.afm}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <p className="fieldName">Περιοχή</p>
                        <input 
                            className="input" 
                            type="text" 
                            name="region"
                            value={formData.region}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="column">
                        <p className="fieldName">Δήμος</p>
                        <input 
                            className="input" 
                            type="text" 
                            name="municipality"
                            value={formData.municipality}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <p className="fieldName">Οδός</p>
                        <input 
                            className="input" 
                            type="text" 
                            name="street"
                            value={formData.street}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="column">
                        <p className="fieldName">Αριθμός</p>
                        <input 
                            className="input" 
                            type="text" 
                            name="streetNumber"
                            value={formData.streetNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="data-1">
            <p className="header">Ανέβασμα Πιστοποιητικών</p>
                <div className="row">
                    <div className="column">
                        <div className="fieldName2">
                            <p className="fieldName">Πιστοποιητικό Σπουδών :</p>
                            <img src="/exclamation 1.png" alt="" />
                        </div>
                        <input className="input" 
                                type="file"
                                ref={fileInputRef}
                                name="studiesCertificate"
                                value={formData.studiesCertificate}
                                onChange={handleFileChange}
                                style={{ display: 'none'}} 
                                id="file-upload"
                        />
                        <label
                            htmlFor="file-upload"
                            style={{
                                display: 'block',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                textAlign: 'center',
                                color: '#4a4e69',
                                fontSize: '16px',
                                fontWeight: '100',
                            }}
                        >
                            {fileInputRef.current && fileInputRef.current.files.length > 0
                                ? fileInputRef.current.files[0].name
                                : "Ανέβασε απο τον υπολογιστή σου"}
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="fieldName2">
                            <p className="fieldName">Πιστοποιητικό Υγείας :</p>
                            <img src="/exclamation 1.png" alt="" />
                        </div>
                        
                        <input className="input" 
                                type="file"
                                ref={fileInputRef}
                                name="healthCertificate"
                                value={formData.healthCertificate}
                                onChange={handleFileChange}
                                style={{ display: 'none'}} 
                                id="file-upload"
                        />
                        <label
                            htmlFor="file-upload"
                            style={{
                                display: 'block',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                textAlign: 'center',
                                color: '#4a4e69',
                                fontSize: '16px',
                                fontWeight: '100',
                            }}
                        >
                            {fileInputRef.current && fileInputRef.current.files.length > 0
                                ? fileInputRef.current.files[0].name
                                : "Ανέβασε απο τον υπολογιστή σου"}
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="fieldName2">
                            <p className="fieldName">Πιστοποιητικό Πρώτων Βοηθειών :</p>
                            <img src="/exclamation 1.png" alt="" />
                        </div>
                        
                        <input className="input" 
                                type="file"
                                ref={fileInputRef}
                                name="firstAid"
                                value={formData.firstAid}
                                onChange={handleFileChange}
                                style={{ display: 'none'}} 
                                id="file-upload"
                        />
                        <label
                            htmlFor="file-upload"
                            style={{
                                display: 'block',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                textAlign: 'center',
                                color: '#4a4e69',
                                fontSize: '16px',
                                fontWeight: '100',
                            }}
                        >
                            {fileInputRef.current && fileInputRef.current.files.length > 0
                                ? fileInputRef.current.files[0].name
                                : "Ανέβασε απο τον υπολογιστή σου"}
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="fieldName2">
                            <p className="fieldName">Αντίγραφο Ποινικού Μητρώου :</p>
                            <img src="/exclamation 1.png" alt="" />
                        </div>
                        
                        <input className="input" 
                                type="file"
                                name="criminalRecord"
                                value={formData.criminalRecord}
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: 'none'}} 
                                id="file-upload"
                        />
                        <label
                            htmlFor="file-upload"
                            style={{
                                display: 'block',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                textAlign: 'center',
                                color: '#4a4e69',
                                fontSize: '16px',
                                fontWeight: '100',
                            }}
                        >
                            {fileInputRef.current && fileInputRef.current.files.length > 0
                                ? fileInputRef.current.files[0].name
                                : "Ανέβασε απο τον υπολογιστή σου"}
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <p className="fieldName">Δυνατότητα Φύλαξης στον Χώρο μου :</p>
                        <input 
                            className="input4" 
                            type="text" 
                            name="hosting"
                            value={formData.hosting}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            <button className="btn" onClick={handleSubmit}>Συνέχεια</button>
        </div>
    </div>
  )
}

export default NtantaGov