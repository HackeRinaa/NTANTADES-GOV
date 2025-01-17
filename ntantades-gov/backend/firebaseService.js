import {  collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";


// Function to add user selection
export const handleUserSelection = async (region, municipality) => {
    try {
      const userSelectionsCollection = collection(db, "userSelections");
      await addDoc(userSelectionsCollection, {
        region: region,
        municipality: municipality,
        timestamp: new Date()
      });
      console.log("User  selection added successfully!");
    } catch (error) {
      console.error("Error adding user selection: ", error);
    }
  };
  
  // Function to add dummy nannies data
  export const addDummyNannies = async () => {
    const nanniesCollection = collection(db, "nannies");
    const dummyNannies = [
      { name: "Alice Johnson", availability: "Weekdays", contact: "123-456-7890" },
      { name: "Maria Smith", availability: "Weekends", contact: "987-654-3210" },
      { name: "Emma Brown", availability: "Evenings", contact: "555-555-5555" },
      { name: "Sophia Davis", availability: "Mornings", contact: "444-444-4444" }
    ];
  
    try {
      for (const nanny of dummyNannies) {
        await addDoc(nanniesCollection, nanny);
      }
      console.log("Dummy nannies added successfully!");
    } catch (error) {
      console.error("Error adding dummy nannies: ", error);
    }
  };


  const initializeData = async () => {
    await addDummyNannies; // Add nannies from the JSON file
  };
  
  // Call this function when the application starts or when needed
  initializeData();