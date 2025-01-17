import NavBar from "../../components/navBar/NavBar";
import "./ntantaFaq.css";
import { useState } from "react";

function NtantaFaq() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    //const questions = [
    //    {
    //        question: "Ε : Πώς μπορώ να συμμετάσχω ως νταντά στο πρόγραμμα;",
    //        answer: "Αφού εισέλθετε στην ιστοσελίδα και συνδεθείτε ως Νταντά, θα χρειαστεί να εγγραφείτε στο Μητρώο Επιμελητών με τους κωδικούς σας στο TaxisNet. Μετά τη σύνδεση σας, η πλατφόρμα θα σας ζητήσει να δημιουργήσετε το προφίλ σας. Εκεί θα πρέπει να συμπληρώσετε προσωπικά στοιχεία και να ανεβάσετε τα απαραίτητα πιστοποιητικά που θα σας ζητηθούν. Αφού ολοκληρώσετε αυτή τη διαδικασία, το προφίλ σας θα είναι έτοιμο, και θα εμφανίζεστε πλέον ως διαθέσιμη Νταντά για συνεργασία."
    //    },
    //    {
    //        question: "Ε : Ποιά είναι τα απαραίτητα πιστοποιητικά για την εγγραφή;",
    //      answer: "Χρειάζεστε Πιστοποιητικά Σπουδών, Πιστοποιητικό πρώτων βοηθειών, Αντίγραφο Ποινικού Μητρώου και Πιστοποιητικό υγείας. Αν είσαι πολίτης της Ε.Ε. ή τρίτης χώρας θα χρειαστείς επιπλέον έγγραφα όπως άδεια διαμονής."
    //},
    //    {
    //        question: "Ε : Πώς γίνονται οι πληρωμές;",
    //        answer: "Οι πληρωμές πραγματοποιούνται ηλεκτρονικά μέσω ενός voucher της πλατφόρμας. Στο τέλος κάθε μήνα, θα λάβετε την αμοιβή σας για τις υπηρεσίες που προσφέρατε."
    //    },
    //    {
    //        question: "Ε : Τι γίνεται αν έχω κάποιο πρόβλημα με την οικογένεια;",
    //        answer: "Εάν αντιμετωπίσετε οποιοδήποτε πρόβλημα, μπορείτε να επικοινωνήσετε με την υποστήριξη του προγράμματος. Η ομάδα μας θα σας βοηθήσει να επιλύσετε το ζήτημα. Επίσης μπορείτε να διακόψετε τη συμμετοχή σας στο πρόγραμμα ανά πάσα στιγμή. Απλά ενημερώστε μας μέσω της πλατφόρμας ή επικοινωνήστε με την υποστήριξη."
    //    },
    //];

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