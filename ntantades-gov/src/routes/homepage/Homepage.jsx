import "./homepage.css";

function Homepage() {
  return (
<div className="HERO-SECTION">
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

        <div className="text-wrapper-4">
          Νταντάδες της <br />
          Γειτονιάς
        </div>

        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="overlap-2">
              <img className="line" alt="Line" src="ntantades-gov\src\assets\line1.svg"/>

              <img className="img" alt="Line" src="ntantades-gov\src\assets\line2.svg" />
            </div>

            <div className="overlap-3">
              <div className="rectangle" />

              <div className="rectangle-2" />

              <img
                className="screenshot"
                alt="Screenshot"
                src="../public/main.png"
              />
            </div>
          </div>
        </div>

        <p className="element">
          Υπηρεσία κατ&#39; οίκον φροντίδας βρεφών και νηπίων <br />
          από 2 μηνών έως 2,5 ετών
        </p>

        <div className="group">
          <div className="div-wrapper">
            <div className="text-wrapper-5">Γονέας</div>
          </div>

          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-5">Νταντά</div>
            </div>
          </div>

          <div className="text-wrapper-6">Είμαι :</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;