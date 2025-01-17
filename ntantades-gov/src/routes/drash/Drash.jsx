import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import "./drash.css";

export const HDrash = () => {
  const navigate = useNavigate();

  return (
    <div className="h-DRASH">
      <NavBar/>
        <div className="main-container-drash">
          <div className="image">
            <h1>Η ΔΡΑΣΗ</h1>
            <img src="/drash.png" alt="" />
          </div>
          <div className="text">
            <p>
              Η πρωτοβουλία 
              <span>&#34;Νταντάδες της Γειτονιάς&#34;</span>
              είναι ένα καινοτόμο πρόγραμμα που στηρίζει τις οικογένειες παρέχοντας ασφαλείς και αξιόπιστες υπηρεσίες φύλαξης βρεφών και νηπίων. Στόχος της δράσης είναι να συνδέσει γονείς με πιστοποιημένες νταντάδες, προσφέροντας ευελιξία, εμπιστοσύνη και επαγγελματισμό.
            </p>
          </div>
          <div className="sub-text">
            <p>Είσαι γονέας και αναζητάς φροντίδα για το παιδί σου; <br />Ή μήπως θέλεις να γίνεις Νταντά και να προσφέρεις τις υπηρεσίες σου;</p>
          </div>

          <div className="rectangle"></div>

          <div className="btn-selection-drash">
            <h2 className="option">Eίμαι :</h2>
            <div className="btns">
              <button className="activeBtn" onClick={() => navigate('/goneas')}>Γονέας</button>
              <button className="activeBtn"  onClick={() => navigate('/ntanta')}>Νταντά</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default HDrash;