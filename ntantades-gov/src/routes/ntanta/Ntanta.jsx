import "./ntanta.css"

function Ntanta() {
  return (
    <div className="NANNY">
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

        <div className="overlap">
          <img className="image" alt="Image" src="../public/ntanta.png" />

          <div className="text">
            <div className="text-wrapper-4">Θες να γίνεις Νταντά;</div>

            <p className="p">
              Αναζητάς ευκαιρίες εργασίας σε ένα ευχάριστο <br />
              περιβάλλον με παιδιά;
            </p>

            <p className="div-2">
              <span className="span">Η Δράση</span>

              <span className="text-wrapper-5">
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
              <div className="text-wrapper-6">Συνέχεια</div>
            </div>

            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="rectangle" />

                <div className="text-wrapper-7">Συχνές Ερωτήσεις</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ntanta;