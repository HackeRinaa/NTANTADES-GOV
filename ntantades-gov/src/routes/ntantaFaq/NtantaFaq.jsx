import "./ntantaFaq.css";
import { useState } from "react";

function NtantaFaq() {
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
    <div className='NtantaFaq'>
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

        <div className="text-text-wrapper-4-2">Συχνές Ερωτήσεις</div>

        <p className="p">
            Αυτές είναι μερικές απο τις πιο συχνές ερωτήσεις.
            <br />
            Αν έχετε επιπλέον ερωτήσεις επικοινωνήστε με το κέντρο επικοινωνίας.
        </p>
        <div className="container">
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
  );
};

export default NtantaFaq;