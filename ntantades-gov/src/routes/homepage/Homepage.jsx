import "./homepage.css";

function Homepage() {
  return (
    <div className="HERO-SECTION"> 
      <div className="NAV">
        <div className="logo">
          govgr
        </div>
        <div className="navbar">
          <a className="nav-link" href="#home">ΑΡΧΙΚΗ</a>
          <a className="nav-link" href="#drash">Η ΔΡΑΣΗ</a>
          <a className="nav-link" href="#goneas">ΓΟΝΕΑΣ</a>
          <a className="nav-link" href="#ntanta">ΝΤΑΝΤΑ</a>
          <a className="nav-link" href="#epikoinonia">ΕΠΙΚΟΙΝΩΝΙΑ</a>
          <div className="auth-button">
            <button className="login-btn" href="#sindesi">ΣΥΝΔΕΣΗ</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="column">
          <div className="headers">
            <h1 className="title">
              Νταντάδες της <br />
              Γειτονιάς
            </h1>
            <p className="sub-title">
              Υπηρεσία κατοίκον φροντίδας βρεφών και νηπίων <br />
              από 2 μηνών έως 2,5 ετών
            </p>
          </div>
          <div className="btn-selection">
            <h2 className="option">Eίμαι :</h2>
            <div className="btns">
              <button className="activeBtn">Γονέας</button>
              <button className="activeBtn">Νταντά</button>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="wrapper">
            <div className="lines">
              <div className="line-1"></div>
              <div className="line-2"></div>
            </div>
            <div className="picture">
              <div className="rectangle"></div>
              <div className="rectangle-2"></div>
              <img className="image" alt="image" src="/main.png" />
            </div>  
          </div>
        </div>
      </div>


 
      
    </div>
  );
};

export default Homepage;