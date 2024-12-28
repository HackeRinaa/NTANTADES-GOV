import "./goneas.css"

function Goneas() {
  return (
    <div className="PARENT">
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

      <div className="text">
        <div className="text-wrapper-4-2">Έχεις Μικρό Παιδί ;</div>

        <p className="p">
          Αναζητάς λύσεις για την φροντίδα <br />
          του παιδιού σου,ενώ εσύ εργάζεσαι;
        </p>

        <p className="div-2">
          <span className="span">Η Δράση</span>

          <span className="text-wrapper-5-2">
            {" "}
            &#34;Νταντάδες της Γειτονιάς&#34;
          </span>

          <span className="span">
            {" "}
            σου προσφέρει
            <br />
            την ευκαιρία να βρεις αξιόπιστη φροντίδα για το παιδί σου,
            <br />
            απελευθερώνοντας χρόνο για τις επαγγελματικές σου <br />
            υποχρεώσεις!
          </span>
        </p>

        <p className="online">
          Δες άμεσα αν πληρείς τις προϋποθέσεις
          <br />
          και υποβάλλε αίτησή σου online!
        </p>

        <div className="div-wrapper">
          <a className="text-wrapper-6 btn">Βρες Νταντά</a>
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="rectangle" />

            <a className="text-wrapper-7 btn">Συχνές Ερωτήσεις</a>
          </div>
        </div>
      </div>

      <img
        className="screenshot"
        alt="Screenshot"
        src="../public/goneas.png"
      />
    </div>
  );
};

export default Goneas;