// Register.jsx

import React, { useState } from "react";
import "../styles/register.css";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

const Register = () => {
  const [selectedInterest, setSelectedInterest] = useState("");

  const interests = [
    "React JS",
    "JavaScript",
    "UI Design",
    "Frontend",
    "Backend",
  ];

  return (
    <div className="register-page">
      {/* DECORATIONS */}
      <div className="bg-circle circle-1"></div>
      <div className="bg-circle circle-2"></div>
      <div className="grid-dots top-dots"></div>
      <div className="grid-dots bottom-dots"></div>

      <div className="register-container">
        {/* LEFT SIDE */}
        <div className="register-left">
          <div className="badge">SUMMER 2.0</div>

          <h1>
            Summer <span>Bootcamp</span>
          </h1>

          <p className="subtitle">
            Join our intensive coding bootcamp and learn modern frontend
            development from scratch.
          </p>

          <div className="learn-card">
            <div className="card-icon">🎓</div>

            <div>
              <h3>What You’ll Learn</h3>

              <ul>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>Basic React JS</li>
              </ul>
            </div>
          </div>

          <div className="info-grid">
            <div className="info-box">
              <span>Duration</span>
              <h3>1 Month</h3>
            </div>

            <div className="info-box">
              <span>Time</span>
              <h3>9AM - 12PM</h3>
            </div>

            <div className="info-box">
              <span>Fee</span>
              <h3>₦40,000</h3>
            </div>

            <div className="info-box">
              <span>Venue</span>
              <h3>Osogbo, Osun State</h3>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="register-card">
          <div className="card-glow"></div>

          <h2>Register Now</h2>

          <p>
            Fill in your details to reserve your spot in the Summer Bootcamp
            2.0
          </p>

          <form>
            <div className="input-group">
              <FiUser className="input-icon" />

              <input type="text" placeholder="Full Name" />
            </div>

            <div className="input-group">
              <FiMail className="input-icon" />

              <input type="email" placeholder="Email Address" />
            </div>

            <div className="input-group">
              <FiPhone className="input-icon" />

              <input type="tel" placeholder="Phone Number" />
            </div>

            <div className="input-group">
              <FiMapPin className="input-icon" />

              <input type="text" placeholder="Your Location" />
            </div>

            {/* INTERESTS */}
            <div className="interest-section">
              <label>What interests you most?</label>

              <div className="interest-tags">
                {interests.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={
                      selectedInterest === item ? "active" : ""
                    }
                    onClick={() => setSelectedInterest(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="register-btn">
              Make Payment
              <FiArrowRight />
            </button>
          </form>

          <div className="contact-text">
            For more info call <span>09034951446</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;