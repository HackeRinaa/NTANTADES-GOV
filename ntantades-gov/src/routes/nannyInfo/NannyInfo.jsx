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
            description: 'Θα χρειαστείτε και τους κωδικούς σας στο TaxisNet',
            details: ['Πιστοποιητικό Σπουδών', 'Πιστοποιητικό πρώτων βοηθειών', 'Αντίγραφο Ποινικού Μητρώου ' , 'Πιστοποιητικό υγείας'],
        },
        {
            title: 'Πως λειτουργεί:',
            image: '/gears.png', // Replace with your image path
            description: 'Θα βρείτε αναλυτικές οδηγίες κατά τη διάρκεια της εγγραφής σας.',
            details: ['Εγγραφείτε', 'Φτιάξτε το Προφίλ σας', 'Ξεκινήστε ως Νταντά'],
        },
        {
            title: 'Γιατί να συμμετάσχεις:',
            image: '/network.png', // Replace with your image path
            description: 'Με τη συμμετοχή σας, κάνετε το πάθος σας για τη φροντίδα των παιδιών μια ουσιαστική και επαγγελματική δραστηριότητα.',
            details: ['Ευκαιρίες Εργασίας', 'Ευελιξία', 'Συνεισφορά στην Κοινωνία'],
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