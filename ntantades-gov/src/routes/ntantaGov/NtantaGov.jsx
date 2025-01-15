import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import "./ntantaGov.css";
import { useRef } from "react";


function NtantaGov() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const fileName = event.target.files[0] ? event.target.files[0].name : '';
        console.log(fileName); // You can handle the file name as needed
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
                        <input className="input4" type="text" />
                    </div>
                </div>
            </div>
        </div>
        <div className="box">
            <button className="btn" onClick={() => navigate('/cv-template')}>Συνέχεια</button>
        </div>
    </div>
  )
}

export default NtantaGov