import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import { auth, db } from "../../../backend/firebase";
import { doc, getDoc } from "firebase/firestore";
import ratingsNanny from "../../data/ratingNanny.json";
import ratingsParent from "../../data/ratingParent.json";
import "./ratings.css";

function Ratings() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [role, setRole] = useState(null); // State to store the user's role
  const itemsPerSlide = 3; // Number of items to show per slide
  const totalSlides = Math.ceil(ratings.length / itemsPerSlide);

  useEffect(() => {
    // Fetch the user's role from Firestore
    const fetchUserRole = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          throw new Error("No user is logged in.");
        }

        const userDoc = await getDoc(doc(db, "users", user.uid));
        const fetchedRole = userDoc.data()?.role;

        if (!fetchedRole) {
          throw new Error("User role is not defined.");
        }

        setRole(fetchedRole);

        // Assign ratings based on the user's role
        if (fetchedRole === "parent") {
          setRatings(ratingsNanny);
        } else if (fetchedRole === "nanny") {
          setRatings(ratingsParent);
        }
      } catch (error) {
        console.error("Error fetching user role:", error.message);
      }
    };

    fetchUserRole();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="Ratings">
      <NavBar />
      <div className="backbtn">
        <button
          className="btn"
          onClick={() =>
            navigate(role === "nanny" ? "/profile-ntanta" : "/profile-parent")
          }
        >
          Το Προφίλ Μου
        </button>
      </div>
      <div className="main-container-ratings">
        <div className="headers">
          <h2>Οι αξιολογήσεις μου</h2>
        </div>
        <div className="carousel-container-rating">
          <button className="arrow left" onClick={prevSlide}>
            ❮
          </button>
          <div className="carousel">
            {ratings
              .slice(currentIndex * itemsPerSlide, currentIndex * itemsPerSlide + itemsPerSlide)
              .map((rating) => (
                <div key={rating.id} className="carousel-item">
                  <img
                    src={rating.image}
                    alt={`${rating.name} ${rating.surname}`}
                    className="rating-image"
                  />
                  <h3>
                    {rating.name} {rating.surname}
                  </h3>
                  <div className="rating-stars">
                    <p>Αξιολόγηση: {rating.stars}/5</p>
                    <img src="/Star.png" alt="" />
                  </div>
                  <p className="note">{rating.note}</p>
                </div>
              ))}
          </div>
          <button className="arrow right" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ratings;
