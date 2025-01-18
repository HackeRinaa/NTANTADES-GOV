import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import "./ntantaGov.css";
import { useRef, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../backend/firebase";
import { getAuth } from "firebase/auth";

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


    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = errors;
        if (!formData.firstName) newErrors.firstName = "Το όνομα είναι υποχρεωτικό.";
        if (!formData.lastName) newErrors.lastName = "Το επώνυμο είναι υποχρεωτικό.";
        if (!formData.birthDate) newErrors.birthDate = "Η ημερομηνία γέννησης είναι υποχρεωτική.";
        if (!formData.amka) newErrors.amka = "Το ΑΜΚΑ είναι υποχρεωτικό.";
        if (!formData.afm) newErrors.afm = "Το ΑΦΜ είναι υποχρεωτικό.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    
    const [adultBirthDay, setAdultBirthDay] = useState("");
    const [adultBirthMonth, setAdultBirthMonth] = useState("");
    const [adultBirthYear, setAdultBirthYear] = useState("");

    const handleAdultBirthDateChange = () => {
        const fullDate = `${adultBirthYear}-${adultBirthMonth.padStart(2, "0")}-${adultBirthDay.padStart(2, "0")}`;
        setFormData({ ...formData, birthDate: fullDate });
    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    const handleSubmit = async () => {
        if (!validateForm()) return;

        try {
            const auth = getAuth(); // Get Firebase Auth instance
            const user = auth.currentUser; // Get the currently signed-in user
            
            if (!user) {
                throw new Error("No user is signed in.");
            }

            const userId = user.uid; // Get the user's unique ID
            const userDoc = doc(db, "users", userId);

            await setDoc(userDoc, { 
                nannyDetails: formData,

             }, { merge: true }
            );

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
                                name="studiesCertificate"
                                value={formData.studiesCertificate}
                                onChange={handleChange}
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
                                name="healthCertificate"
                                value={formData.healthCertificate}
                                onChange={handleChange}
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
                                name="firstAid"
                                value={formData.firstAid}
                                onChange={handleChange}
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
                                onChange={handleChange}
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