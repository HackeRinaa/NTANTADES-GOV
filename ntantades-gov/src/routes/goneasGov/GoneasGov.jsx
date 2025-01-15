import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import "./goneasGov.css";
import { useRef } from "react";


function GoneasGov() {

    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const fileName = event.target.files[0] ? event.target.files[0].name : '';
        console.log(fileName); // You can handle the file name as needed
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
                        <input className="input" type="text" />
                    </div>
                    <div className="column">
                        <p className="fieldName">Επώνυμο</p>
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                    <p className="fieldName">Ημερομηνία Γέννησης</p>
                        <div className="date">
                            <input className="input2" type="text" />
                            <input className="input2" type="text" />
                            <input className="input3" type="text" />
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <p className="fieldName">AMKA</p>
                        <input className="input" type="text" />
                    </div>
                    <div className="column">
                        <p className="fieldName">ΑΦΜ</p>
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <p className="fieldName">Περιοχή</p>
                        <input className="input" type="text" />
                    </div>
                    <div className="column">
                        <p className="fieldName">Δήμος</p>
                        <input className="input" type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <p className="fieldName">Οδός</p>
                        <input className="input" type="text" />
                    </div>
                    <div className="column">
                        <p className="fieldName">Αριθμός</p>
                        <input className="input" type="text" />
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
                                type="file"
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
                    <p className="fieldName">Ημερομηνία Γέννησης</p>
                        <div className="date">
                            <input className="input2" type="text" />
                            <input className="input2" type="text" />
                            <input className="input3" type="text" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                    <label  className="fieldName" htmlFor="Relation">Σχέση Αιτούντος με Τέκνο :</label>
                    <select id="relation">
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
            <button className="btn" onClick={() => navigate('/goneas-profile')}>Συνέχεια</button>
        </div>
    </div>
  )
}

export default GoneasGov