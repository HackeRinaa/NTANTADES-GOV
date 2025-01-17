import { useEffect, useState } from 'react';
import './selectNanny.css';
import NavBar from '../../components/navBar/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../backend/firebase';

const SelectNanny = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [selectedNanny, setSelectedNanny] = useState(null);
    const location = useLocation();
    const { selectedRegion, selectedMunicipality } = location.state || {};
    const [nannies, setNannies] = useState([]);

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
                const nanniesData = querySnapshot.docs.map(doc => {
                    const nanny = doc.data();
                    return {
                        id: doc.id,
                        ...nanny,
                        image: nanny.image || '/profilePic.png',  // Use fallback image if no image exists
                    };
                });
                setNannies(nanniesData);
            }
        };

        fetchNannies();
    }, [selectedRegion, selectedMunicipality]);

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
            <NavBar />
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
                                        <p>{selectedNanny.firstName}</p>
                                    </div>
                                    <div className="column">
                                        <h2>Επώνυμο:</h2>
                                        <p>{selectedNanny.lastName}</p>
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
                                    < p className='note'>{selectedNanny.notes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="carousel-container">
                    <button className="arrow left" onClick={prevSlide}>❮</button>
                    <div className="carousel">
                        {nannies.slice(currentIndex * itemsPerSlide, (currentIndex + 1) * itemsPerSlide).map((nanny) => (
                            <div
                                key={nanny.id}
                                className="carousel-item"
                                onClick={() => handleItemClick(nanny)}
                            >
                                <img src={nanny.image} alt={`${nanny.firstName} ${nanny.lastName}`} className="nanny-image" />
                                <h3>{nanny.firstName} {nanny.lastName}</h3>
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