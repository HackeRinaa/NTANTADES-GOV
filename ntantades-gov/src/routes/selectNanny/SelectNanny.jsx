import "./selectNanny.css";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "../../../backend/firebase";
import NavBar from "../../components/navBar/NavBar";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const SelectNanny = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [selectedNanny, setSelectedNanny] = useState(null);
    const location = useLocation();
    const { selectedRegion, selectedMunicipality } = location.state || {};
    const [nannies, setNannies] = useState([]);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const fetchNannies = async () => {
            if (selectedRegion && selectedMunicipality) {
                const nanniesRef = collection(db, "nannies");
                const q = query(
                    nanniesRef,
                    where("region", "==", selectedRegion),
                    where("municipality", "==", selectedMunicipality)
                );
                const querySnapshot = await getDocs(q);
                const nanniesData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setNannies(nanniesData);

                const nannyCount = nanniesData.length;
                setItemsPerSlide(Math.min(3, nannyCount));
            }
        };
        fetchNannies();
    }, [selectedRegion, selectedMunicipality]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % nannies.length); // Loop back to the beginning
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + nannies.length) % nannies.length); // Loop back to the end
    };

    const handleOpenOverlay = () => {
        const centerIndex = (currentIndex + Math.floor(itemsPerSlide / nannies.length)) % nannies.length; // Center item
        setSelectedNanny(nannies[centerIndex]);
        setOverlayVisible(true);
    };

    const closeOverlay = () => {
        setOverlayVisible(false);
        setSelectedNanny(null);
    };

    const getDisplayedItems = () => {
        const displayedItems = [];
        const totalNannies = nannies.length;

        for (let i = 0; i < itemsPerSlide; i++) {
            const index = (currentIndex + i - Math.floor(itemsPerSlide / 2) + totalNannies) % totalNannies;
            displayedItems.push(nannies[index]);
        }

        return displayedItems;
    };

    const handleBookAppointment = async () => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const userDoc = await getDoc(doc(db, "users", user.uid)); // Adjust the collection name if needed
            if (userDoc.exists()) {
                const userData = userDoc.data();
                setUserRole(userData.role); 
                if (userRole === 'parent') {
                    navigate("/appointment");
                }
            }
          } else {
                navigate("/login"); // Redirect to login if no user is logged in
            }
        });
    };

    if (nannies.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="SelectNanny">
            <NavBar />
            <div className="main-container">
                <div className="header-container">
                    <h1 className="title">Γνώρισε τις Νταντάδες της Γειτονιάς σου</h1>
                    <div className="buttons">
                        <button className="non-active" onClick={handleOpenOverlay}>Δες Βιογραφικό</button>
                        <button className="active" onClick={handleBookAppointment}>Κλείσε Ραντεβού</button>
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
                                <hr className="line" />
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
                                <hr className="line" />
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
                                <hr className="line" />
                                <div className="row">
                                    <p className="note">{selectedNanny.note}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="carousel-container">
                    <button className="arrow left" onClick={prevSlide}>❮</button>
                    <div className="carousel" style={{ transform: `translateX(-${(currentIndex - Math.floor(itemsPerSlide / 2)) * (100 / itemsPerSlide)}%)` }}>
                        {getDisplayedItems().map((nanny, index) => (
                            nanny ? (
                                <div key={nanny.id} className={`carousel-item ${index === Math.floor(itemsPerSlide / (nannies.length / (nannies.length / 3))) ? 'selected' : ''}`}>
                                    <img src={nanny.image || '/public/profilePic.png'} alt={`${nanny.name} ${nanny.surname}`} className="nanny-image" />
                                    <h3>{nanny.name} {nanny.surname}</h3>
                                    <p>{nanny.occupation}</p>
                                </div>
                            ) : null
                        ))}
                    </div>
                    <button className="arrow right" onClick={nextSlide}>❯</button>
                </div>
                <button className="non-active" onClick={() => navigate('/select-neighborhood')}>Πήγαινε Πίσω</button>
            </div>
        </div>
    );
};

export default SelectNanny;
