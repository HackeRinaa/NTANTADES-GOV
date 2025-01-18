import { getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDVTl7fzu4q_x2XiQigF35XtkSzOjfXNLI",
  authDomain: "ntantades-gov-64f60.firebaseapp.com",
  projectId: "ntantades-gov-64f60",
  storageBucket: "ntantades-gov-64f60.firebasestorage.app",
  messagingSenderId: "351757808107",
  appId: "1:351757808107:web:3b1e219647baa8b26ee9ae",
  measurementId: "G-RD3E3RCKMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage};



const uploadNannies = async () => {
  const nanniesRegion = await import('../src/data/nanniesRegions.json', {
    assert: { type: 'json' },
  });

  const nanniesCollection = collection(db, "nannies");
  try {
    for (const nanny of nanniesRegion) {
      await addDoc(nanniesCollection, nanny);
    }
    console.log("Nannies added successfully!");
  } catch (error) {
    console.error("Error adding nannies: ", error);
  }
};

uploadNannies();