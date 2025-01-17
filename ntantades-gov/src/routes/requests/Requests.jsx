import { useState } from 'react';
import './requests.css';
import NavBar from '../../components/navBar/NavBar';

const Requests = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nannies = [
        { id: 1, name: 'Αλίκη', surname: 'Ιακωβίδου', occupation: 'Συνταξιούχος', image: '/grandma.png', age: 68 },
        { id: 2, name: 'Γιάννης', surname: 'Παπαθανασίου', occupation: 'Καθηγητής Αγγλικών', image: '/boy.png', age: 26 },
        { id: 3, name: 'Βασιλεία', surname: 'Παπαδοπούλου', occupation: 'Φοιτήτρια', image: '/girl.png', age: 23 },
        { id: 4, name: 'Μαρία', surname: 'Παρθένη', occupation: 'Άνεργη', image: '/woman.jpg', age: 34 },
        { id: 5, name: 'Νίκος', surname: 'Ρεγκούσης', occupation: 'Συνταξιούχος', image: '/grandpa.jpg', age: 69 },
        { id: 6, name: 'Αγγελική', surname: 'Ρούσου', occupation: 'Νταντά', image: '/girl2.webp', age: 29 },
    ];

    const itemsPerSlide = 3; // Number of items to show per slide

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(nannies.length));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(nannies.length / itemsPerSlide)));
    };

    return (
        <div className="Requests">
            <NavBar/>
            <div className="backbtn">
                <button className="btn">Το Προφίλ Μου</button>
            </div>
            <div className="main-container-requests">
                <div className="header-container">
                    <h1 className='title'>Οι Αιτήσεις σου</h1>
                    <p className="sub-title">Δες ξανά που έχεις κάνει αίτηση</p>
                    <div className="buttons">
                        <button className='non-active'>Δες τα Συμφωνητικά σου</button>
                        <button className='active'>Στείλε Μήνυμα</button>   
                    </div>

                </div>
                
                <div className="carousel-container-requests">
                    <button className="arrow left" onClick={prevSlide}>❮</button>
                    <div className="carousel">
                        {nannies.slice(currentIndex * itemsPerSlide, currentIndex * itemsPerSlide + itemsPerSlide).map((nanny) => (
                            <div
                                key={nanny.id}
                                className="carousel-item"
                            >
                                <img src={nanny.image} alt={`${nanny.name} ${nanny.surname}`} className="nanny-image" />
                                <h3>{nanny.name} {nanny.surname}</h3>
                                <p>{nanny.occupation} , {nanny.age}</p>
                            </div>
                        ))}
                    </div>
                    <button className="arrow right" onClick={nextSlide}>❯</button>

            </div>    
            </div>
        </div>
    );
};

export default Requests;