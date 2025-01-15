import NavBar from "../../components/navBar/NavBar";
import "./goneas.css";
import { useNavigate } from "react-router-dom";

function Goneas() {
  const navigate = useNavigate();

  return (
    <div className="PARENT">
      <NavBar/>
      <div className="container">
        <div className="headers">
              <h2 className="title">Έχεις Μικρό Παιδί ;</h2>

              <p className="sub-title">
                Αναζητάς λύσεις για την φροντίδα <br />
                του παιδιού σου,ενώ εσύ εργάζεσαι;
              </p>
              <p className="details">
                σου προσφέρει
                <br />
                την ευκαιρία να βρεις αξιόπιστη φροντίδα για το παιδί σου,
                <br />
                απελευθερώνοντας χρόνο για τις επαγγελματικές σου <br />
                υποχρεώσεις!
              </p>

              <p className="online">
                Δες άμεσα αν πληρείς τις προϋποθέσεις
                <br />
                και υποβάλλε αίτησή σου online!
              </p>
              <div className="btns">
                <button className="activeBtn" onClick={() => navigate('/select-neighborhood')}>Βρες Νταντά</button>
                <button className="activeBtn long" onClick={() => navigate('/goneas-faq')}>Συχνές Ερωτήσεις</button>
              </div>
        </div>   
        <img className="screenshot" alt="Screenshot" src="../public/goneas.png"/>
      </div>
    </div>
  );
};

export default Goneas;