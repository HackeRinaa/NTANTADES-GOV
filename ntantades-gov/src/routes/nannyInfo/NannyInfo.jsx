import FlippingCard from '../../components/flippingCard/FlippingCard';
import "./nannyInfo.css";

function NannyInfo() {
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
            <div className="NAV">
                <div className="logo">
                    govgr
                </div>
                <div className="navbar">
                    <a className="nav-link" href="#home">ΑΡΧΙΚΗ</a>
                    <a className="nav-link" href="#drash">Η ΔΡΑΣΗ</a>
                    <a className="nav-link" href="#goneas">ΓΟΝΕΑΣ</a>
                    <a className="nav-link" href="#ntanta">ΝΤΑΝΤΑ</a>
                    <a className="nav-link" href="#epikoinonia">ΕΠΙΚΟΙΝΩΝΙΑ</a>
                    <div className="auth-button">
                        <button className="login-btn" href="#sindesi">ΣΥΝΔΕΣΗ</button>
                    </div>
                </div>
            </div>
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
                <button className="activeBtn">Εγγραφή</button>     
            </div>
        </div>
    );
}

export default NannyInfo;