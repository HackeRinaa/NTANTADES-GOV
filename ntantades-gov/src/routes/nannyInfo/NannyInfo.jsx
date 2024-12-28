import React from 'react';
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
            <div className="div">
                <div className="NAV">
                    <div className="text-wrapper-3">govgr</div>
                    <div className="navbar">
                        <a className="text-wrapper-4" href="#home">ΑΡΧΙΚΗ</a>
                        <a className="text-wrapper-4" href="#drash">Η ΔΡΑΣΗ</a>
                        <a className="text-wrapper-4" href="#goneas">ΓΟΝΕΑΣ</a>
                        <a className="text-wrapper-4" href="#ntanta">ΝΤΑΝΤΑ</a>
                        <a className="text-wrapper-4" href="#epikoinonia">ΕΠΙΚΟΙΝΩΝΙΑ</a>
                        <div className="frame">
                            <div className="overlap-group">
                                <a className="text-wrapper-5" href="#sindesi">ΣΥΝΔΕΣΗ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="title">
                    <div className="text-wrapper-4-2">Καλώς Ήρθες</div>
                    <p className="p">Υπέβαλε την αίτηση σου και γίνε μέρος του Μητρώου Επιμελητών,</p>
                </div>

                <div className='cards'>
                    {cardData.map((data, index) => (
                        <FlippingCard key={index} {...data} />
                    ))}
                </div>

                <div className="div-wrapper">
                    <a className="text-wrapper-8">Εγγραφή</a>
                </div>
            </div>
    );
}

export default NannyInfo;