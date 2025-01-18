import NavBar from "../../components/navBar/NavBar";
import "./ntantaFaq.css";
import { useState } from "react";
import questions from "../../data/questionsNanny.json";

function NtantaFaq() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    
    const toggleQuestion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

  return (
    <div className='NtantaFaq'>
        <NavBar/>
        <div className="main-container">
            <div className="headers-faq">
                <h1 className="title">Συχνές Ερωτήσεις</h1>
                <p className="sub-title">
                    Αυτές είναι μερικές απο τις πιο συχνές ερωτήσεις.
                    <br />
                    Αν έχετε επιπλέον ερωτήσεις επικοινωνήστε με το κέντρο επικοινωνίας.
                </p>
            </div>

            <div className="container-faq">
            {questions.map((item, index) => (
                <div className="question" key={index}>
                    <div className="question-header" onClick={() => toggleQuestion(index)}>
                        <p className="text-wrapper-5-2">
                            {item.question}
                        </p>
                        <img
                            className={`upload ${expandedIndex === index ? 'rotated' : ''}`}
                            src="/arrow.png"
                            alt=""
                        />
                    </div>
                    <hr />
                    {expandedIndex === index && (
                        <p className="text-wrapper-7">
                            {item.answer}
                        </p>
                    )}
                </div>
            ))}
        </div>
        </div>

    </div>
  );
};

export default NtantaFaq;