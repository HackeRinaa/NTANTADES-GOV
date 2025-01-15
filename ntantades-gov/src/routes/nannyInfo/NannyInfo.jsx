import { useNavigate } from 'react-router-dom';
import FlippingCard from '../../components/flippingCard/FlippingCard';
import NavBar from '../../components/navBar/NavBar';
import "./nannyInfo.css";

function NannyInfo() {
    const navigate = useNavigate();

    const cardData = [
        {
            title: 'Τι θα χρειαστείς:',
            image: '/folder.png', // Replace with your image path
            description: 'Make sure to gather all necessary materials.',
            details: ['Item 1', 'Item 2', 'Item 3'],
        },
        {
            title: 'Πως λειτουργεί:',
            image: '/gears.png', // Replace with your image path
            description: 'Follow the instructions carefully.',
            details: ['Step 1', 'Step 2', 'Step 3'],
        },
        {
            title: 'Γιατί να συμμετάσχεις:',
            image: '/network.png', // Replace with your image path
            description: 'Join us for a great experience.',
            details: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
        },
    ];

    return (
        <div className="NannyInfo">
            <NavBar/>
            <div className="main-container">
                <div className="header">
                    <h1 className="title">Καλώς Ήρθες</h1>
                    <p className="sub-title">Υπέβαλε την αίτηση σου και γίνε μέρος του Μητρώου Επιμελητών,</p>
                </div>
                <div className='cards'>
                    {cardData.map((data, index) => (
                        <FlippingCard key={index} {...data} />
                    ))}
                </div>
                <button className="activeBtn" onClick={() => navigate('/signup-nanny')}>Εγγραφή</button>     
            </div>
        </div>
    );
}

export default NannyInfo;