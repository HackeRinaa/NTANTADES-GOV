import NavBar from "../../components/navBar/NavBar";
import "./goneasFaq.css";
import { useState } from "react";

function GoneasFaq() {

    const [expandedIndex, setExpandedIndex] = useState(null);

   // const questions = [
   //     {
    //        question: "Ε : Τι είναι το πρόγραμμα Νταντάδες της Γειτονιάς;",
    //        answer: "Το πρόγραμμα Νταντάδες της Γειτονιάς παρέχει ασφαλείς και αξιόπιστες υπηρεσίες φύλαξης βρεφών και νηπίων. Συνδέει γονείς με πιστοποιημένες νταντάδες, προσφέροντας ευελιξία και επαγγελματισμό."
    //    },
    //    {
    //        question: "Ε : Πώς μπορώ να εγγραφώ στο πρόγραμμα;",
    //        answer: "Για την εγγραφή σας μπείτε στην ιστοσελίδα, διαλέξτε την περιοχή σας, γνωρίστε τις Νταντάδες που βρίσκονται στην γειτονία σας, συνδεθείτε στην πλατφορμά με τους κωδικούς TaxisNet και κλείστε ραντεβού με την Νταντά που σας ταιρίαζει"
    //    },
    //    {
    //        question: "Ε : Πώς μπορώ να επιλέξω νταντά για το παιδί μου;",
    //        answer: "Αφού επιλέξετε την περιοχή όπου διαμένετε, θα μεταφερθείτε στη σελίδα με τις Νταντάδες που εργάζονται στη γειτονιά σας. Από εκεί μπορείτε να δείτε τα βιογραφικά τους και να κλείσετε ραντεβού για επικοινωνία μέσω της πλατφόρμας με όποια Νταντά καλύπτει τις απαιτήσεις σας."
    //    },
    //    {
    //        question: "Ε : Πώς διασφαλίζεται η αξιοπιστία των νταντάδων;",
    //        answer: "Όλες οι νταντάδες που συμμετέχουν στο πρόγραμμα περνούν από διαδικασία πιστοποίησης, η οποία περιλαμβάνει έλεγχο προσόντων, συστάσεις και συνεντεύξεις."
    //    },
    //];

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