import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import "./goneasGov.css";
import { useRef, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../backend/firebase";


function GoneasGov() {

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
        childAmka: "",
        childBirthDate: "",
        relation: "",
        proof: "",
    });

    const [childBirthDay, setchildBirthDay] = useState("");
    const [childBirthMonth, setchildBirthMonth] = useState("");
    const [childBirthYear, setchildBirthYear] = useState("");
  
    const handleChildBirthDateChange = () => {
      // Combine day, month, and year into a single date string
      const fullDate = `${childBirthYear}-${childBirthMonth.padStart(2, "0")}-${childBirthDay.padStart(2, "0")}`;
      setFormData({ ...formData, childBirthDate: fullDate });
    };
  
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
          navigate("/goneas-profile");
        } catch (error) {
          console.error("Error saving data:", error);
        }
      };

  return (
    <div className='GoneasGov'>
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
            <p className="header">Στοιχεία Τέκνου</p>
                <div className="row">
                    <div className="column">
                        <div className="fieldName2">
                            <p className="fieldName">ΑΜΚΑ Τέκνου :</p>
                            <img src="/exclamation 1.png" alt="" />
                        </div>
                        <input className="input" 
                                type="text"
                                name="childAmka"
                                value={formData.childAmka}
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
                                value={childBirthDay}
                                onChange={(e) => setchildBirthDay(e.target.value)}
                                onBlur={handleChildBirthDateChange}
                            />
                            <input 
                                className="input2" 
                                type="text" 
                                placeholder="MM"
                                value={childBirthMonth}
                                onChange={(e) => setchildBirthMonth(e.target.value)}
                                onBlur={handleChildBirthDateChange}
                            />
                            <input 
                                className="input3" 
                                type="text" 
                                placeholder="YYYY"
                                value={childBirthYear}
                                onChange={(e) => setchildBirthYear(e.target.value)}
                                onBlur={handleChildBirthDateChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                    <label  className="fieldName" htmlFor="Relation">Σχέση Αιτούντος με Τέκνο :</label>
                    <select id="relation" value={formData.relation} onChange={handleChange}>
                        <option value="">Επιλέξτε σχέση</option>
                        <option value="morning">Γονέας</option>
                        <option value="afternoon">Κηδεμόνας</option>
                        <option value="evening">Άλλο</option>
                    </select>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                    <label className="fieldName" htmlFor="Proof">Επιλέξτε δικαιολογητικό γονικής μέριμνας :</label>
                    <select id="proof">
                        <option  value="">Επιλέξτε Δικαιολογητικό</option>
                        <option value="morning">Πιστοποιητικό Γέννησης</option>
                        <option value="afternoon">Διαβατήριο</option>
                        <option value="evening">Άλλο</option>
                    </select>
                    <input className="input" 
                                type="file"
                                ref={fileInputRef}
                                name="proof"
                                value={formData.proof}
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
            </div>
        </div>
        <div className="box">
            <button className="btn" onClick={handleSubmit}>Συνέχεια</button>
        </div>
    </div>
  )
}

export default GoneasGov