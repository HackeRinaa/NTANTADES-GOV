import "./homepage.css";

function Homepage() {
  return (
    <div className="HERO-SECTION">
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

        <div className="text-wrapper-4-2">
          Νταντάδες της <br />
          Γειτονιάς
        </div>

        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="overlap-2">
              <img className="line" alt="Line" src="../public/line1.svg" />
              <img className="img" alt="Line" src="../public/line2.svg" />
            </div>

            <div className="overlap-3">
              <div className="rectangle" />
              <div className="rectangle-2" />
              <img className="screenshot" alt="Screenshot" src="../public/main.png" />
            </div>
          </div>
        </div>

        <p className="element">
          Υπηρεσία κατ' οίκον φροντίδας βρεφών και νηπίων <br />
          από 2 μηνών έως 2,5 ετών
        </p>

        <div className="group">
          <button className="role-button">Γονέας</button>
          <button className="role-button">Νταντά</button>
          <div className="text-wrapper-6">Είμαι :</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;