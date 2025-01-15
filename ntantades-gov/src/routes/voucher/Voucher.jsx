import { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./voucher.css";
import { useNavigate } from "react-router-dom";

function Voucher() {
    const navigate = useNavigate();

    const VoucherData = [
        {
            id: 1,
            parent: {
                name: "Γιώργος",
                surname: "Παπαδάκης",
                address: "Σταδίου 34, Αθήνα",
                phone: "694 123 9876"
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
            caretakerDuties: "Φροντίδα και επιτήρηση του παιδιού κατά τη διάρκεια της ημέρας.",
            status: "εκκρεμές" // Added status
        },
        {
            id: 2,
            parent: {
                name: "Μαρία",
                surname: "Ιωαννίδου",
                address: "Κηφισίας 12, Αθήνα",
                phone: "698 765 4321"
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
            caretakerDuties: "Δραστηριότητες και παιχνίδια με το παιδί.",
            status: "πληρωμένο" // Added status
        },
        {
            id: 3,
            parent: {
                name: "Αντώνης",
                surname: "Παπαδόπουλος",
                address: "Σαλαμίνος 8, Πειραιάς",
                phone: "694 321 9876"
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
            caretakerDuties: "Εκπαίδευση και βοήθεια στα μαθήματα.",
            status: "εκκρεμές" // Added status
        },
        {
            id: 4,
            parent: {
                name: "Ελένη",
                surname: "Καραγιάννη",
                address: "Λεωφόρος Αθηνών 100, Αθήνα",
                phone: "697 987 6543"
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
            caretakerDuties: "Φροντίδα και ψυχαγωγία του παιδιού.",
            status: "πληρωμένο" // Added status
        },
        {
            id: 5,
            parent: {
                name: "Δημήτρης",
                surname: "Χατζηγεωργίου",
                address: "Αγίου Δημητρίου 5, Αθήνα",
                phone: "698 123 4567"
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
            caretakerDuties: "Φροντίδα και βοήθεια με τις δραστηριότητες του παιδιού.",
            status: "πληρωμένο" 
        },
        {
            id: 6,
            parent: {
                name: "Σοφία",
                surname: "Αλεξίου",
                address: "Πλατεία Συντάγματος 1, Αθήνα",
                phone: "697 654 3210"
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
            caretakerDuties: "Δημιουργική απασχόληση και φροντίδα του παιδιού.",
            status: "εκκρεμές" // Added status
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [selectedNanny, setSelectedNanny] = useState(null);
    const [filter, setFilter] = useState("ολα"); // Filter state

    const itemsPerSlide = 3; // Number of items to show per slide

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(filteredVouchers.length / itemsPerSlide));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(filteredVouchers.length / itemsPerSlide)) % Math.ceil(filteredVouchers.length / itemsPerSlide));
    };

    const handleItemClick = (nanny) => {
        setSelectedNanny(nanny);
        setOverlayVisible(true);
    };

    const closeOverlay = () => {
        setOverlayVisible(false);
        setSelectedNanny(null);
    };

    const filteredVouchers = VoucherData.filter(voucher => filter === "ολα" || voucher.status === filter);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };


    return (
        <div className="Voucher">
            <NavBar />
            <div className="backbtn">
                <button className="btn" onClick={() => navigate('/profile-ntanta')}>Το Προφίλ Μου</button>
            </div>
            <div className="main-container-voucher">
                <div className="headers-con">
                    <h2 className="title-con">Τα Voucher μου</h2>
                    <p className="sub-title-con">Πατήστε για να δείτε την κατάσταση του Voucher</p>
                </div>
                <div className="filter-bar">
                    <select value={filter} onChange={handleFilterChange}>
                        <option value="ολα">Όλα</option>
                        <option value="εκκρεμές">Εκκρεμή</option>
                        <option value="πληρωμένο">Πληρωμένα</option>
                    </select>
                </div>
                {isOverlayVisible && selectedNanny && (
                    <div className="overlay">
                        <div className="overlay-content">
                            <button className="close-button" onClick={closeOverlay}>✖</button>
                            <div className="overlay-container">
                                <h2 className="title-overlay">Voucher από <span> {selectedNanny.parent.name} {selectedNanny.parent.surname}</span></h2>
                                <p className="description-overlay">Η κατάσταση του Voucher είναι:   
                                <span>
                                {selectedNanny.status}
                                </span></p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="carousel-container-contract">
                    <button className="arrow left" onClick={prevSlide}>❮</button>
                    <div className="carousel">
                        {filteredVouchers.slice(currentIndex * itemsPerSlide, currentIndex * itemsPerSlide + itemsPerSlide).map((rating) => (
                            <div
                                key={rating.id}
                                className="carousel-item"
                                onClick={() => handleItemClick(rating)}
                            >
                                <div className="row-detail">
                                    <h3>Γονέας</h3>
                                    <p><span>Ονοματεπώνυμο: </span>{rating.parent.name} {rating.parent.surname}</p>
                                </div>
                                <div className="row-detail">
                                    <h3>Διάρκεια Σύμβασης</h3>
                                    <p>{rating.contractDuration.startTime} έως {rating.contractDuration.endTime} στις {rating.contractDuration.date}</p>
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

export default Voucher;