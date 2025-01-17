import { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./ratings.css";
import { useNavigate } from "react-router-dom";

function Ratings() {
    const navigate = useNavigate();

    const ratings = [
        { id: 1, name: 'Αλίκη', surname: 'Ιακωβίδου', stars: 4, image: '/grandma.png', note: "Γεια σας! Ονομάζομαι Σοφία, είμαι 21 ετών και λατρεύω να δουλεύω με παιδιά. Έχω εμπειρία στη φροντίδα και δημιουργική απασχόληση παιδιών διαφόρων ηλικιών, ενώ δίνω πάντα προτεραιότητα στην ασφάλεια, την ανάπτυξη και τη χαρά τους. Είμαι υπεύθυνη, υπομονετική και μου αρέσει να βρίσκω διασκεδαστικούς και εκπαιδευτικούς τρόπους να περνάμε τον χρόνο μας. Ανυπομονώ να σας γνωρίσω και να γίνω μέρος της καθημερινότητάς σας!" },
        { id: 2, name: 'Γιάννης', surname: 'Παπαθανασίου', stars: 3, image: '/boy.png',note: "Γεια σας! Ονομάζομαι Σοφία, είμαι 21 ετών και λατρεύω να δουλεύω με παιδιά. Έχω εμπειρία στη φροντίδα και δημιουργική απασχόληση παιδιών διαφόρων ηλικιών, ενώ δίνω πάντα προτεραιότητα στην ασφάλεια, την ανάπτυξη και τη χαρά τους. Είμαι υπεύθυνη, υπομονετική και μου αρέσει να βρίσκω διασκεδαστικούς και εκπαιδευτικούς τρόπους να περνάμε τον χρόνο μας. Ανυπομονώ να σας γνωρίσω και να γίνω μέρος της καθημερινότητάς σας!" },
        { id: 3, name: 'Βασιλεία', surname: 'Παπαδοπούλου', stars: 5, image: '/girl.png', note: "Γεια σας! Ονομάζομαι Σοφία, είμαι 21 ετών και λατρεύω να δουλεύω με παιδιά. Έχω εμπειρία στη φροντίδα και δημιουργική απασχόληση παιδιών διαφόρων ηλικιών, ενώ δίνω πάντα προτεραιότητα στην ασφάλεια, την ανάπτυξη και τη χαρά τους. Είμαι υπεύθυνη, υπομονετική και μου αρέσει να βρίσκω διασκεδαστικούς και εκπαιδευτικούς τρόπους να περνάμε τον χρόνο μας. Ανυπομονώ να σας γνωρίσω και να γίνω μέρος της καθημερινότητάς σας!" },
        { id: 4, name: 'Μαρία', surname: 'Παρθένη', stars: 2, image: '/woman.jpg', note: "Γεια σας! Ονομάζομαι Σοφία, είμαι 21 ετών και λατρεύω να δουλεύω με παιδιά. Έχω εμπειρία στη φροντίδα και δημιουργική απασχόληση παιδιών διαφόρων ηλικιών, ενώ δίνω πάντα προτεραιότητα στην ασφάλεια, την ανάπτυξη και τη χαρά τους. Είμαι υπεύθυνη, υπομονετική και μου αρέσει να βρίσκω διασκεδαστικούς και εκπαιδευτικούς τρόπους να περνάμε τον χρόνο μας. Ανυπομονώ να σας γνωρίσω και να γίνω μέρος της καθημερινότητάς σας!" },
        { id: 5, name: 'Νίκος', surname: 'Ρεγκούσης', stars: 5, image: '/grandpa.jpg', note:  "Γεια σας! Ονομάζομαι Σοφία, είμαι 21 ετών και λατρεύω να δουλεύω με παιδιά. Έχω εμπειρία στη φροντίδα και δημιουργική απασχόληση παιδιών διαφόρων ηλικιών, ενώ δίνω πάντα προτεραιότητα στην ασφάλεια, την ανάπτυξη και τη χαρά τους. Είμαι υπεύθυνη, υπομονετική και μου αρέσει να βρίσκω διασκεδαστικούς και εκπαιδευτικούς τρόπους να περνάμε τον χρόνο μας. Ανυπομονώ να σας γνωρίσω και να γίνω μέρος της καθημερινότητάς σας!" },
        { id: 6, name: 'Αγγελική', surname: 'Ρούσου', stars: 3, image: '/girl2.webp', note: "Γεια σας! Ονομάζομαι Σοφία, είμαι 21 ετών και λατρεύω να δουλεύω με παιδιά. Έχω εμπειρία στη φροντίδα και δημιουργική απασχόληση παιδιών διαφόρων ηλικιών, ενώ δίνω πάντα προτεραιότητα στην ασφάλεια, την ανάπτυξη και τη χαρά τους. Είμαι υπεύθυνη, υπομονετική και μου αρέσει να βρίσκω διασκεδαστικούς και εκπαιδευτικούς τρόπους να περνάμε τον χρόνο μας. Ανυπομονώ να σας γνωρίσω και να γίνω μέρος της καθημερινότητάς σας!" },
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = 3; // Number of items to show per slide
    const totalSlides = Math.ceil(ratings.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };
  return (
    <div className="Ratings">
        <NavBar/>
        <div className="backbtn">
            <button className="btn" onClick={() => navigate('/profile-ntanta')}>Το Προφίλ Μου</button>
        </div>
        <div className="main-container-ratings">
            <div className="headers">
                <h2>Οι αξιολογήσεις μου</h2>
            </div>
            <div className="carousel-container-rating">
                <button className="arrow left" onClick={prevSlide}>❮</button>
                <div className="carousel">
                    {ratings.slice(currentIndex * itemsPerSlide, currentIndex * itemsPerSlide + itemsPerSlide).map((rating) => (
                        <div
                            key={rating.id}
                            className="carousel-item"
                        >
                            <img src={rating.image} alt={`${rating.name} ${rating.surname}`} className="rating-image" />
                            <h3>{rating.name} {rating.surname}</h3>
                            <div className="rating-stars">
                                <p>Αξιολόγηση: {rating.stars}/5</p>
                                <img src="/Star.png" alt="" />
                            </div>
                            <p className="note">{rating.note}</p>
                        </div>
                    ))}
                </div>
                <button className="arrow right" onClick={nextSlide}>❯</button>
            </div>    
        </div>
    </div>
  );
};

export default Ratings;