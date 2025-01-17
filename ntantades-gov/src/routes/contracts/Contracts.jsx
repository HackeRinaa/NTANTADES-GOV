import { useCallback, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./contracts.css";
import Canvas from "../../components/Canvas";
import { useNavigate } from "react-router-dom";

function Contracts() {
    const navigate = useNavigate();

    const Contracts = [
        {
            id: 1,
            parent: {
                name: "Γιώργος",
                surname: "Παπαδάκης",
                address: "Σταδίου 34, Αθήνα",
                phone: "694 123 9876"
            },
            caretaker: {
                name: "Σοφία",
                surname: "Γεωργίου",
                address: "Αριστοτέλους 25, Πειραιάς",
                phone: "697 890 1234"
            },
            child: {
                name: "Δημήτρης",
                surname: "Παπαδάκης",
                age: "7 ετών"
            },
            contractDuration: {
                startTime: "14:00",
                endTime: "20:00",
                date: "20/11/2024"
            },
            payment: {
                amount: "60 ευρώ",
                paymentTerms: "Η πληρωμή θα γίνει αμέσως μετά το πέρας της ημέρας."
            },
            caretakerDuties: "Φροντίδα και επιτήρηση του παιδιού κατά τη διάρκεια της ημέρας."
        },
        {
            id: 2,
            parent: {
                name: "Μαρία",
                surname: "Ιωαννίδου",
                address: "Κηφισίας 12, Αθήνα",
                phone: "698 765 4321"
            },
            caretaker: {
                name: "Αλέξανδρος",
                surname: "Κωνσταντίνου",
                address: "Πανεπιστημίου 45, Θεσσαλονίκη",
                phone: "695 123 4567"
            },
            child: {
                name: "Ελένη",
                surname: "Ιωαννίδου",
                age: "5 ετών"
            },
            contractDuration: {
                startTime: "15:00",
                endTime: "19:00",
                date: "21/11/2024"
            },
            payment: {
                amount: "50 ευρώ",
                paymentTerms: "Η πληρωμή θα γίνει στο τέλος της ημέρας."
            },
            caretakerDuties: "Δραστηριότητες και παιχνίδια με το παιδί."
        },
        {
            id: 3,
            parent: {
                name: "Αντώνης",
                surname: "Παπαδόπουλος",
                address: "Σαλαμίνος 8, Πειραιάς",
                phone: "694 321 9876"
            },
            caretaker: {
                name: "Κατερίνα",
                surname: "Σταυροπούλου",
                address: "Αγίας Σοφίας 10, Αθήνα",
                phone: "698 654 3210"
            },
            child: {
                name: "Νίκος",
                surname: "Παπαδόπουλος",
                age: "6 ετών"
            },
            contractDuration: {
                startTime: "13:00",
                endTime: "18:00",
                date: "22/11/2024"
            },
            payment: {
                amount: "70 ευρώ",
                paymentTerms: "Η πληρωμή θα γίνει πριν την έναρξη της φύλαξης."
            },
            caretakerDuties: "Εκπαίδευση και βοήθεια στα μαθήματα."
        },
        {
            id: 4,
            parent: {
                name: "Ελένη",
                surname: "Καραγιάννη",
                address: "Λεωφόρος Αθηνών 100, Αθήνα",
                phone: "697 987 6543"
            },
            caretaker: {
                name: "Γιάννης",
                surname: "Παπακωνσταντίνου",
                address: "Ερμού 30, Θεσσαλονίκη",
                phone: "694 567 8901"
            },
            child: {
                name: "Στέφανος",
                surname: "Καραγιάννης",
                age: "8 ετών"
            },
            contractDuration: {
                startTime: "12:00",
                endTime: "17:00",
                date: "23/11/2024"
            },
            payment: {
                amount: "65 ευρώ",
                paymentTerms: "Η πληρωμή θα γίνει στο τέλος της ημέρας."
            },
            caretakerDuties: "Φροντίδα και ψυχαγωγία του παιδιού."
        },
        {
            id: 5,
            parent: {
                name: "Δημήτρης",
                surname: "Χατζηγεωργίου",
                address: "Αγίου Δημητρίου 5, Αθήνα",
                phone: "698 123 4567"
            },
            caretaker: {
                name: "Μαρία",
                surname: "Λαμπροπούλου",
                address: "Σαπφούς 20, Πειραιάς",
                phone: "694 321 6547"
            },
            child: {
                name: "Αλέξανδρος",
                surname: "Χατζηγεωργίου",
                age: "9 ετών"
            },
            contractDuration: {
                startTime: "11:00",
                endTime: "16:00",
                date: "24/11/2024"
            },
            payment: {
                amount: "75 ευρώ",
                paymentTerms: "Η πληρωμή θα γίνει πριν την έναρξη της φύλαξης."
            },
            caretakerDuties: "Φροντίδα και βοήθεια με τις δραστηριότητες του παιδιού."
        },
        {
            id: 6,
            parent: {
                name: "Σοφία",
                surname: "Αλεξίου",
                address: "Πλατεία Συντάγματος 1, Αθήνα",
                phone: "697 654 3210"
            },
            caretaker: {
                name: "Ανδρέας",
                surname: "Μαυρίδης",
                address: "Κωνσταντίνου 15, Θεσσαλονίκη",
                phone: "698 987 6543"
            },
            child: {
                name: "Μαρία",
                surname: "Αλεξίου",
                age: "4 ετών"
            },
            contractDuration: {
                startTime: "10:00",
                endTime: "14:00",
                date: "25/11/2024"
            },
            payment: {
                amount: "55 ευρώ",
                paymentTerms: "Η πληρωμή θα γίνει στο τέλος της ημέρας."
            },
            caretakerDuties: "Δημιουργική απασχόληση και φροντίδα του παιδιού."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [selectedNanny, setSelectedNanny] = useState(null);

    const itemsPerSlide = 3; // Number of items to show per slide

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(Contracts.length));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(Contracts.length / itemsPerSlide)));
    };

    
    const handleItemClick = (nanny) => {
        setSelectedNanny(nanny);
        setOverlayVisible(true);
    };

    const closeOverlay = () => {
        setOverlayVisible(false);
        setSelectedNanny(null);
    };


    const draw = useCallback((ctx) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clear the canvas
        ctx.fillStyle = 'lightblue'; // Set fill color
        ctx.fillRect(50, 50, 200, 100); // Draw a rectangle
    }, []); // No dependencies, so it won't change

  return (
    <div className="Contracts">
        <NavBar/>
        <div className="backbtn">
            <button className="btn" onClick={() => navigate('/profile-ntanta')}>Το Προφίλ Μου</button>
        </div>
        <div className="main-container-contracts">
            <div className="headers-con">
                <h2 className="title-con">Τα συμφωνητικά μου</h2>
                <p className="sub-title-con">Πατηστε πάνω για υπογραφή</p>
            </div>
            {isOverlayVisible && selectedNanny && (
                    <div className="overlay">
                        <div className="overlay-content">
                            <img src={selectedNanny.image} alt="" />
                            <button className="close-button" onClick={closeOverlay}>✖</button>
                            <div className="sign-container">
                                <h2 className="sign-title">Υπογράψτε εδώ: </h2>
                                <div className="sign-rect">
                                    <Canvas draw={draw} width={300} height={300}/>
                                </div>
                                <button className='btn' onClick={closeOverlay}>Ολοκλήρωση</button>
                            </div>
                            
                        </div>
                    </div>
            )}
            <div className="carousel-container-contract">
                <button className="arrow left" onClick={prevSlide}>❮</button>
                <div className="carousel">
                    {Contracts.slice(currentIndex * itemsPerSlide, currentIndex * itemsPerSlide + itemsPerSlide).map((rating) => (
                        <div
                            key={rating.id}
                            className="carousel-item"
                            onClick={() => handleItemClick(rating)}
                        >
                            <div className="row-detail">
                                <h3>Γονέας</h3>
                                <p><span>Ονοματεπώνυμο: </span>{rating.parent.name} {rating.parent.surname}</p>
                                <p><span>Διεύθυνση: </span>{rating.parent.address}</p>
                                <p><span>Τηλέφωνο: </span>{rating.parent.phone}</p>
                            </div>

                            <div className="row-detail">
                                <h3>Επιμελητής</h3>
                                <p><span>Ονοματεπώνυμο: </span>{rating.caretaker.name} {rating.caretaker.surname}</p>
                                <p><span>Διεύθυνση: </span>{rating.caretaker.address}</p>
                                <p><span>Τηλέφωνο: </span>{rating.caretaker.phone}</p>
                            </div>

                            <div className="row-detail">
                                <h3>Στοιχεία Παιδιού</h3>
                                <p><span>Ονοματεπώνυμο: </span>{rating.child.name} {rating.child.surname}</p>
                                <p><span>Ηλικία: </span>{rating.child.address}</p>
                            </div>

                            <div className="row-detail">
                                <h3>Διάρκεια Σύμβασης</h3>
                                <p>{rating.contractDuration.startTime} έως {rating.contractDuration.endTime}
                                στις {rating.contractDuration.date}
                                </p>  
                            </div>

                            <div className="row-detail">
                                <h3>Αμοιβή</h3>
                                <p><span>Ποσό: </span>{rating.payment.amount}</p>
                                <p><span>Όροι: </span>{rating.payment.paymentTerms}</p>
                            </div>

                            <div className="row-detail">
                                <h3>Υποχρεώσεις Επιμελητή</h3>
                                <p>{rating.caretakerDuties}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="arrow right" onClick={nextSlide}>❯</button>
            </div>    
        </div>
    </div>
  );

};

export default Contracts;