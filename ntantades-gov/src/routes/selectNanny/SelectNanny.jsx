import { useState } from 'react';
import './selectNanny.css';
import NavBar from '../../components/navBar/NavBar';
import { useNavigate } from 'react-router-dom';

const SelectNanny = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [selectedNanny, setSelectedNanny] = useState(null);

    const nannies = [
        { id: 1, name: 'Αλίκη', surname: 'Ιακωβίδου', occupation: 'Συνταξιούχος', image: '/grandma.png', age: 68, email: 'aliki.iak@gmail.com', phone: "6945678324", gender: 'Γυναίκα', note: "Γεια σας! Ονομάζομαι Σοφία, είμαι 21 ετών και λατρεύω να δουλεύω με παιδιά. Έχω εμπειρία στη φροντίδα και δημιουργική απασχόληση παιδιών διαφόρων ηλικιών, ενώ δίνω πάντα προτεραιότητα στην ασφάλεια, την ανάπτυξη και τη χαρά τους. Είμαι υπεύθυνη, υπομονετική και μου αρέσει να βρίσκω διασκεδαστικούς και εκπαιδευτικούς τρόπους να περνάμε τον χρόνο μας. Ανυπομονώ να σας γνωρίσω και να γίνω μέρος της καθημερινότητάς σας!" },
        { id: 2, name: 'Γιάννης', surname: 'Παπαθανασίου', occupation: 'Καθηγητής Αγγλικών', image: '/boy.png', age: 26, email: 'john.pap@gmail.com', phone: "6975743523", gender: 'Άντρας',note: "Γεια σας! Ονομάζομαι Σοφία, είμαι 21 ετών και λατρεύω να δουλεύω με παιδιά. Έχω εμπειρία στη φροντίδα και δημιουργική απασχόληση παιδιών διαφόρων ηλικιών, ενώ δίνω πάντα προτεραιότητα στην ασφάλεια, την ανάπτυξη και τη χαρά τους. Είμαι υπεύθυνη, υπομονετική και μου αρέσει να βρίσκω διασκεδαστικούς και εκπαιδευτικούς τρόπους να περνάμε τον χρόνο μας. Ανυπομονώ να σας γνωρίσω και να γίνω μέρος της καθημερινότητάς σας!" },
        { id: 3, name: 'Βασιλεία', surname: 'Παπαδοπούλου', occupation: 'Φοιτήτρια', image: '/girl.png', age: 23, email: 'vasileiapap@gmail.com', phone: "6976754357", gender: 'Γυναίκα', note: "Γεια σας! Ονομάζομαι Σοφία, είμαι 21 ετών και λατρεύω να δουλεύω με παιδιά. Έχω εμπειρία στη φροντίδα και δημιουργική απασχόληση παιδιών διαφόρων ηλικιών, ενώ δίνω πάντα προτεραιότητα στην ασφάλεια, την ανάπτυξη και τη χαρά τους. Είμαι υπεύθυνη, υπομονετική και μου αρέσει να βρίσκω διασκεδαστικούς και εκπαιδευτικούς τρόπους να περνάμε τον χρόνο μας. Ανυπομονώ να σας γνωρίσω και να γίνω μέρος της καθημερινότητάς σας!" },
        { id: 4, name: 'Μαρία', surname: 'Παρθένη', occupation: 'Άνεργη', image: '/woman.jpg', age: 34, email: 'mariapartheni@gmail.com', phone: "6976743248", gender: 'Γυναίκα', note: "Γεια σας! Ονομάζομαι Σοφία, είμαι 21 ετών και λατρεύω να δουλεύω με παιδιά. Έχω εμπειρία στη φροντίδα και δημιουργική απασχόληση παιδιών διαφόρων ηλικιών, ενώ δίνω πάντα προτεραιότητα στην ασφάλεια, την ανάπτυξη και τη χαρά τους. Είμαι υπεύθυνη, υπομονετική και μου αρέσει να βρίσκω διασκεδαστικούς και εκπαιδευτικούς τρόπους να περνάμε τον χρόνο μας. Ανυπομονώ να σας γνωρίσω και να γίνω μέρος της καθημερινότητάς σας!" },
        { id: 5, name: 'Νίκος', surname: 'Ρεγκούσης', occupation: 'Συνταξιούχος', image: '/grandpa.jpg', age: 69, email: 'nikreg@gmail.com', phone: "6976324512", gender: "Άντρας", note:  "Γεια σας! Ονομάζομαι Σοφία, είμαι 21 ετών και λατρεύω να δουλεύω με παιδιά. Έχω εμπειρία στη φροντίδα και δημιουργική απασχόληση παιδιών διαφόρων ηλικιών, ενώ δίνω πάντα προτεραιότητα στην ασφάλεια, την ανάπτυξη και τη χαρά τους. Είμαι υπεύθυνη, υπομονετική και μου αρέσει να βρίσκω διασκεδαστικούς και εκπαιδευτικούς τρόπους να περνάμε τον χρόνο μας. Ανυπομονώ να σας γνωρίσω και να γίνω μέρος της καθημερινότητάς σας!" },
        { id: 6, name: 'Αγγελική', surname: 'Ρούσου', occupation: 'Νταντά', image: '/girl2.webp', age: 29, email: 'aggrousou@gmail.com', phone: "6976754567", gender: 'Γυναίκα', note: "Γεια σας! Ονομάζομαι Σοφία, είμαι 21 ετών και λατρεύω να δουλεύω με παιδιά. Έχω εμπειρία στη φροντίδα και δημιουργική απασχόληση παιδιών διαφόρων ηλικιών, ενώ δίνω πάντα προτεραιότητα στην ασφάλεια, την ανάπτυξη και τη χαρά τους. Είμαι υπεύθυνη, υπομονετική και μου αρέσει να βρίσκω διασκεδαστικούς και εκπαιδευτικούς τρόπους να περνάμε τον χρόνο μας. Ανυπομονώ να σας γνωρίσω και να γίνω μέρος της καθημερινότητάς σας!" },
    ];

    const itemsPerSlide = 3; // Number of items to show per slide

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(nannies.length / itemsPerSlide));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(nannies.length / itemsPerSlide)) % Math.ceil(nannies.length / itemsPerSlide));
    };

    const handleItemClick = (nanny) => {
        setSelectedNanny(nanny);
        setOverlayVisible(true);
    };

    const closeOverlay = () => {
        setOverlayVisible(false);
        setSelectedNanny(null);
    };


    return (
        <div className="SelectNanny">
            <NavBar/>
            <div className="main-container">
                <div className="header-container">
                    <h1 className='title'>Γνώρισε τις Νταντάδες της Γειτονιάς σου</h1>
                    <div className="buttons">
                        <button className='non-active' onClick={() => navigate('/select-neighborhood')}>Πήγαινε Πίσω</button>
                        <button className='active' onClick={() => navigate('/signup-parent')}>Κλείσε Ραντεβού</button>   
                    </div>

                </div>
                {isOverlayVisible && selectedNanny && (
                    <div className="overlay">
                        <div className="overlay-content">
                            <img src={selectedNanny.image} alt="" />
                            <button className="close-button" onClick={closeOverlay}>✖</button>
                            <div className="details">
                                <div className="row">
                                    <div className="column">
                                        <h2>Όνομα:</h2>
                                        <p>{selectedNanny.name}</p>
                                    </div>
                                    <div className="column">
                                        <h2>Επώνυμο:</h2>
                                        <p>{selectedNanny.surname}</p>
                                    </div>
                                </div>
                                <hr className='line'/>
                                <div className="row">
                                    <div className="column">
                                        <h2>Ηλικία:</h2>
                                        <p>{selectedNanny.age}</p>
                                    </div>
                                    <div className="column">
                                        <h2>Email:</h2>
                                        <p>{selectedNanny.email}</p>
                                    </div>
                                </div>
                                <hr className='line'/>
                                <div className="row">
                                    <div className="column">
                                        <h2>Τηλέφωνο:</h2>
                                        <p>{selectedNanny.phone}</p>
                                    </div>
                                    <div className="column">
                                        <h2>Φύλο:</h2>
                                        <p>{selectedNanny.gender}</p>
                                    </div>
                                </div>
                                <hr className='line'/>
                                <div className="row">
                                    <p className='note'>{selectedNanny.note}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="carousel-container">
                    <button className="arrow left" onClick={prevSlide}>❮</button>
                    <div className="carousel">
                        {nannies.slice(currentIndex * itemsPerSlide, currentIndex * itemsPerSlide + itemsPerSlide).map((nanny) => (
                            <div
                                key={nanny.id}
                                className="carousel-item"
                                onClick={() => handleItemClick(nanny)}
                            >
                                <img src={nanny.image} alt={`${nanny.name} ${nanny.surname}`} className="nanny-image" />
                                <h3>{nanny.name} {nanny.surname}</h3>
                                <p>{nanny.occupation}</p>
                            </div>
                        ))}
                    </div>
                    <button className="arrow right" onClick={nextSlide}>❯</button>

            </div>    
            </div>
        </div>
    );
};

export default SelectNanny;