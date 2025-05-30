import { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./neighborhood.css";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../backend/firebase";
import regions from "../../data/regions.json";
import municipalities from "../../data/municipalities.json";

function Neighborhood() {

  const navigate = useNavigate();
  const [region, setRegion] = useState("");
  const [municipality, setMunicipality] = useState("");



  const handleSearch = async () => {
    try {
      // Save the selected region and municipality to Firestore
      await addDoc(collection(db, "userSelections"), {
        region,
        municipality,
        timestamp: new Date(),
      });
      // Navigate to SelectNanny with state
      navigate('/select-nanny', { state: { selectedRegion: region, selectedMunicipality: municipality } });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
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
            onClick={handleSearch}
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