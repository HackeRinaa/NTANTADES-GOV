import { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./neighborhood.css";
import { useNavigate } from "react-router-dom";


function Neighborhood() {

  const navigate = useNavigate();
  const [region, setRegion] = useState("");
  const [municipality, setMunicipality] = useState("");

  // Sample data for dropdowns
  const regions = [
    "Κέντρο Αθήνας",
    "Βόρεια Προάστια",
    "Νότια Προάστια",
    "Ανατολικά Προάστια",
    "Δυτικά Προάστια",
  ];

  const municipalities = {
    "Κέντρο Αθήνας": ["Αθήνα", "Παγκράτι", "Ζωγράφου"],
    "Βόρεια Προάστια": ["Μαρούσι", "Κηφισιά", "Χαλάνδρι"],
    "Νότια Προάστια": ["Γλυφάδα", "Καλλιθέα", "Άλιμος"],
    "Ανατολικά Προάστια": ["Παλλήνη", "Γέρακας", "Χολαργός"],
    "Δυτικά Προάστια": ["Περιστέρι", "Ίλιον", "Αιγάλεω"],
  };

  return (
    <div className="Neighborhood">
        <NavBar/>
        <div className="main-container-neigh">
            <h1>Αναζήτηση Ανά Γειτονιά</h1>
            <div className="inputs-container">
                <div className="dropdown">
                <label htmlFor="region">Περιοχή</label>
                <select
                    id="region"
                    value={region}
                    onChange={(e) => {
                    setRegion(e.target.value);
                    setMunicipality(""); // Reset municipality when region changes
                    }}
                >
                <option value="">Διαλέξτε Περιοχή</option>
                {regions.map((regionName) => (
                <option key={regionName} value={regionName}>
                    {regionName}
                </option>
                ))}
            </select>
            </div>
            <div className="dropdown">
            <label htmlFor="municipality">Δήμος</label>
            <select
                id="municipality"
                value={municipality}
                onChange={(e) => setMunicipality(e.target.value)}
                disabled={!region} // Disable until a region is selected
            >
                <option value="">Διαλέξτε Δήμο</option>
                {region &&
                municipalities[region].map((municipalityName) => (
                    <option key={municipalityName} value={municipalityName}>
                    {municipalityName}
                    </option>
                ))}
            </select>
            </div>
        </div>
        <button
            className="search-button"
            onClick={() => navigate('/select-nanny')}
            disabled={!region || !municipality} // Disable until both are selected
        >
            Βρες Νταντά
        </button>
        <div className="illustration">
            {/* Placeholder for the illustration */}
            <img src="small-town.png" alt="Neighborhood Illustration" />
        </div>
        </div>
    </div>
  );
}

export default Neighborhood;