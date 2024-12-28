import "./ntanta.css"

function Ntanta() {
  return (
    <div className="NANNY">
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
        <div className="overlap">
          <img className="image" alt="Image" src="../public/ntanta.png" />

          <div className="text">
            <div className="text-wrapper-4-2">Θες να γίνεις Νταντά;</div>

            <p className="p">
              Αναζητάς ευκαιρίες εργασίας σε ένα ευχάριστο <br />
              περιβάλλον με παιδιά;
            </p>

            <p className="div-2">
              <span className="span">Η Δράση</span>

              <span className="text-wrapper-5-2">
                {" "}
                &#34;Νταντάδες της Γειτονιάς&#34;
              </span>

              <span className="span">
                {" "}
                σου δίνει την ευκαιρία να εργαστείς
                <br /> παρέχοντας φροντίδα σε βρέφη και νήπια με αξιοπιστία και
                ασφάλεια.
                <br /> Αν αγαπάς τα παιδιά, ξεκίνα τώρα!{" "}
              </span>
            </p>

            <p className="online">
              Δες άμεσα αν πληρείς τις προϋποθέσεις
              <br />
              και υποβάλλε αίτησή σου online!
            </p>

            <div className="div-wrapper">
              <a className="text-wrapper-6">Συνέχεια</a>
            </div>

            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="rectangle" />

                <a className="text-wrapper-7">Συχνές Ερωτήσεις</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Ntanta;