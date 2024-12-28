import "./drash.css";

export const HDrash = () => {
  return (
    <div className="h-DRASH">
      <div className="div">
        <p className="text-wrapper">Διάλεξε την επιλογή που σου ταιριάζει:</p>

        <div className="overlap">
          <div className="text-wrapper-2">Η ΔΡΑΣΗ</div>

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

        <p className="p">
          <span className="span">Η πρωτοβουλία </span>
          <span className="text-wrapper-6">"Νταντάδες της Γειτονιάς"</span>
          <span className="span"> είναι ένα καινοτόμο πρόγραμμα που στηρίζει τις οικογένειες παρέχοντας ασφαλείς και αξιόπιστες υπηρεσίες φύλαξης βρεφών και νηπίων. Στόχος της δράσης είναι να συνδέσει γονείς με πιστοποιημένες νταντάδες, προσφέροντας ευελιξία, εμπιστοσύνη και επαγγελματισμό.</span>
        </p>

        <p className="text-wrapper-7">
          Είσαι γονέας και αναζητάς φροντίδα για το παιδί σου; <br />Ή μήπως θέλεις να γίνεις Νταντά και να προσφέρεις τις υπηρεσίες σου;
        </p>

        <div className="rectangle" />

        <div className="group">
          <button className="button-wrapper">Γονέας</button>
          <button className="button-wrapper">Νταντά</button>
        </div>
      </div>
    </div>
  );
};

export default HDrash;