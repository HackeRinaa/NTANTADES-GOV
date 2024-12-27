import "./goneas.css"

function Goneas() {
  return (
    <div className="PARENT">
    <div className="div">
      <div className="NAV">
        <div className="text-wrapper">govgr</div>

        <div className="navbar">
          <div className="text-wrapper-2">ΑΡΧΙΚΗ</div>

          <div className="text-wrapper-2">Η ΔΡΑΣΗ</div>

          <div className="text-wrapper-2">ΓΟΝΕΑΣ</div>

          <div className="text-wrapper-2">ΝΤΑΝΤΑ</div>

          <div className="text-wrapper-2">ΕΠΙΚΟΙΝΩΝΙΑ</div>

          <div className="frame">
            <div className="overlap-group">
              <div className="text-wrapper-3">ΣΥΝΔΕΣΗ</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text">
        <div className="text-wrapper-4">Έχεις Μικρό Παιδί ;</div>

        <p className="p">
          Αναζητάς λύσεις για την φροντίδα <br />
          του παιδιού σου,ενώ εσύ εργάζεσαι;
        </p>

        <p className="div-2">
          <span className="span">Η Δράση</span>

          <span className="text-wrapper-5">
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
          <div className="text-wrapper-6">Βρες Νταντά</div>
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="rectangle" />

            <div className="text-wrapper-7">Συχνές Ερωτήσεις</div>
          </div>
        </div>
      </div>

      <img
        className="screenshot"
        alt="Screenshot"
        src="../public/goneas.png"
      />
    </div>
  </div>
  );
};

export default Goneas;