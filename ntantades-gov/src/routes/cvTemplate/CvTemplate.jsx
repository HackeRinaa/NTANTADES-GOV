import "./cvTemplate.css"

function CvTemplate() {
  return (
    <div className="CvTemplate">
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
        <div className="profile-completion-container">

      <div className="form-grid">
      <div className="headers">
            <h1 className="title">Σχεδόν Τελειώσαμε..</h1>
            <p className="subtitle">Εισάγετε αυτές τις πληροφορίες για εσάς, για να ολοκληρώσετε το προφίλ σας.</p>
            </div>
        <div className="form-item">
          <label htmlFor="email">Email:</label>
          <input className="input" type="email" id="email" placeholder="Εισάγετε το email σας" />
        </div>

        <div className="form-item">
          <label htmlFor="phone">Τηλέφωνο Επικοινωνίας:</label>
          <input className="input" type="tel" id="phone" placeholder="Εισάγετε το κινητό σας" />
        </div>

        <div className="form-item">
          <label htmlFor="contact-hours">Ώρες Επικοινωνίας:</label>
          <select id="contact-hours">
            <option value="">Επιλέξτε ώρες</option>
            <option value="morning">Πρωί</option>
            <option value="afternoon">Απόγευμα</option>
            <option value="evening">Βράδυ</option>
          </select>
        </div>

        <div className="form-item">
          <label htmlFor="notes">Προσωπικό Σημείωμα:</label>
          <textarea className="input" id="notes" placeholder="Γράψτε λίγα λόγια για εσάς"></textarea>
        </div>

        <div className="form-item profile-picture">
          <label htmlFor="profile-picture">Φωτογραφία Προφίλ:</label>
          <input type="file" id="profile-picture" />
        </div>
      </div>

        <div className="left-section">
            <div className="main-pic">
                <img src="/image 6.png" alt="" />
            </div>
            <button className="complete-button">Ολοκλήρωση</button>
        </div>
    </div>

    </div>
  )
}

export default CvTemplate