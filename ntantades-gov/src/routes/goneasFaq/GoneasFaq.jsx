import NavBar from "../../components/navBar/NavBar";
import "./goneasFaq.css";
import { useState } from "react";

function GoneasFaq() {

    const [expandedIndex, setExpandedIndex] = useState(null);

    const questions = [
        {
            question: "Ε : Ποιά είναι τα απαραίτητα πιστοποιητικά για την εγγραφή?",
            answer: "Χρειάζεσαι τίτλο σπουδών, πιστοποιητικό πρώτων βοηθειών και πιστοποιητικό υγείας. Αν είσαι πολίτης της Ε.Ε. ή τρίτης χώρας θα χρειαστείς επιπλέον έγγραφα όπως άδεια διαμονής."
        },
        {
            question: "Ε : Ποιά είναι τα απαραίτητα πιστοποιητικά για την εγγραφή?",
            answer: "Χρειάζεσαι τίτλο σπουδών, πιστοποιητικό πρώτων βοηθειών και πιστοποιητικό υγείας. Αν είσαι πολίτης της Ε.Ε. ή τρίτης χώρας θα χρειαστείς επιπλέον έγγραφα όπως άδεια διαμονής."
        },
        {
            question: "Ε : Ποιά είναι τα απαραίτητα πιστοποιητικά για την εγγραφή?",
            answer: "Χρειάζεσαι τίτλο σπουδών, πιστοποιητικό πρώτων βοηθειών και πιστοποιητικό υγείας. Αν είσαι πολίτης της Ε.Ε. ή τρίτης χώρας θα χρειαστείς επιπλέον έγγραφα όπως άδεια διαμονής."
        },
        {
            question: "Ε : Ποιά είναι τα απαραίτητα πιστοποιητικά για την εγγραφή?",
            answer: "Χρειάζεσαι τίτλο σπουδών, πιστοποιητικό πρώτων βοηθειών και πιστοποιητικό υγείας. Αν είσαι πολίτης της Ε.Ε. ή τρίτης χώρας θα χρειαστείς επιπλέον έγγραφα όπως άδεια διαμονής."
        },
    ];

    const toggleQuestion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

  return (
    <div className='GoneasFaq'>
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

export default GoneasFaq;