import "./ntantaGov.css";
import { useRef } from "react";


function NtantaGov() {

    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const fileName = event.target.files[0] ? event.target.files[0].name : '';
        console.log(fileName); // You can handle the file name as needed
    };

  return (
    <div className='NtantaGov'>
        <div className="div">
            <div className="NAV">
                <div className="text-wrapper-3">govgr</div>
                <div className="navbar">
                    <a className="text-wrapper-4" href="#home">ΑΡΧΙΚΗ</a>
                    <a className="text-wrapper-4" href="#drash">Η ΔΡΑΣΗ</a>
                    <a className="text-wrapper-4" href="#goneas">ΓΟΝΕΑΣ</a>
                    <a className="text-wrapper-4" href="#ntanta">ΝΤΑΝΤΑ</a>
                    <a className="text-wrapper-4" href="#epikoinonia">ΕΠΙΚΟΙΝΩΝΙΑ</a>
                    <div className="frame">
                        <div className="overlap-group">
                            <a className="text-wrapper-5" href="#sindesi">ΣΥΝΔΕΣΗ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="data-1">
                <p className="header">'Ελεγχος Στοιχείων</p>
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
            <p className="header">'Ελεγχος Στοιχείων</p>
                <div className="row">
                    <div className="column">
                        <p className="fieldName">Πιστοποιητικό Σπουδών :</p>
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
                        <p className="fieldName">Πιστοποιητικό Υγείας :</p>
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
                        <p className="fieldName">Πιστοποιητικό Πρώτων Βοηθειών :</p>
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
                        <p className="fieldName">Αντίγραφο Ποινικού Μητρώου :</p>
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
                        <input className="input3" type="text" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NtantaGov