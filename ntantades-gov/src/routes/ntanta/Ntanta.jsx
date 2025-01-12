import NavBar from "../../components/navBar/NavBar";
import "./ntanta.css";

function Ntanta() {
  return (
    <div className="NANNY">
        <NavBar/>
        <div className="container">

          <div className="headers-ntanta">
            <h2 className="title">Θες να γίνεις Νταντά;</h2>

            <p className="sub-title">
              Αναζητάς ευκαιρίες εργασίας σε ένα ευχάριστο <br />
              περιβάλλον με παιδιά;
            </p>
            <p className="details">
                Η Δράση <span>Νταντάδες της Γειτονιάς</span>σου δίνει την ευκαιρία να εργαστείς
                <br /> παρέχοντας φροντίδα σε βρέφη και νήπια με αξιοπιστία και
                ασφάλεια.
                <br /> Αν αγαπάς τα παιδιά, ξεκίνα τώρα!
            </p>

            <p className="online">
              Δες άμεσα αν πληρείς τις προϋποθέσεις
              <br />
              και υποβάλλε αίτησή σου online!
            </p>
            <div className="btns">
              <button className="activeBtn">Συνέχεια</button>
              <button className="activeBtn long">Συχνές Ερωτήσεις</button>
            </div>
          </div>   
          <div className="image-container">
            <img className="image" alt="Image" src="/ntanta.png" />
          </div>      
        </div>
      </div>
  );
};

export default Ntanta;