// // Register.jsx

// import React, { useState } from "react";
// import "../styles/register.css";

// import {
//   FiUser,
//   FiMail,
//   FiPhone,
//   FiMapPin,
//   FiArrowRight,
// } from "react-icons/fi";

// const Register = () => {
//   const [selectedInterest, setSelectedInterest] = useState("");

//   const interests = [
//     "React JS",
//     "JavaScript",
//     "UI Design",
//     "Frontend",
//     "Backend",
//   ];

//   return (
//     <div className="register-page">
//       {/* DECORATIONS */}
//       <div className="bg-circle circle-1"></div>
//       <div className="bg-circle circle-2"></div>
//       <div className="grid-dots top-dots"></div>
//       <div className="grid-dots bottom-dots"></div>

//       <div className="register-container">
//         {/* LEFT SIDE */}
//         <div className="register-left">
//           <div className="badge">SUMMER 2.0</div>

//           <h1>
//             Summer <span>Bootcamp</span>
//           </h1>

//           <p className="subtitle">
//             Join our intensive coding bootcamp and learn modern frontend
//             development from scratch.
//           </p>

//           <div className="learn-card">
//             <div className="card-icon">🎓</div>

//             <div>
//               <h3>What You’ll Learn</h3>

//               <ul>
//                 <li>JavaScript</li>
//                 <li>HTML & CSS</li>
//                 <li>Basic React JS</li>
//               </ul>
//             </div>
//           </div>

//           <div className="info-grid">
//             <div className="info-box">
//               <span>Duration</span>
//               <h3>1 Month</h3>
//             </div>

//             <div className="info-box">
//               <span>Time</span>
//               <h3>9AM - 12PM</h3>
//             </div>

//             <div className="info-box">
//               <span>Fee</span>
//               <h3>₦40,000</h3>
//             </div>

//             <div className="info-box">
//               <span>Venue</span>
//               <h3>Osogbo, Osun State</h3>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="register-card">
//           <div className="card-glow"></div>

//           <h2>Register Now</h2>

//           <p>
//             Fill in your details to reserve your spot in the Summer Bootcamp
//             2.0
//           </p>

//           <form>
//             <div className="input-group">
//               <FiUser className="input-icon" />

//               <input type="text" placeholder="Full Name" />
//             </div>

//             <div className="input-group">
//               <FiMail className="input-icon" />

//               <input type="email" placeholder="Email Address" />
//             </div>

//             <div className="input-group">
//               <FiPhone className="input-icon" />

//               <input type="tel" placeholder="Phone Number" />
//             </div>

//             <div className="input-group">
//               <FiMapPin className="input-icon" />

//               <input type="text" placeholder="Your Location" />
//             </div>

//             {/* INTERESTS */}
//             <div className="interest-section">
//               <label>What interests you most?</label>

//               <div className="interest-tags">
//                 {interests.map((item) => (
//                   <button
//                     type="button"
//                     key={item}
//                     className={
//                       selectedInterest === item ? "active" : ""
//                     }
//                     onClick={() => setSelectedInterest(item)}
//                   >
//                     {item}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <button type="submit" className="register-btn">
//               Make Payment
//               <FiArrowRight />
//             </button>
//           </form>

//           <div className="contact-text">
//             For more info call <span>09034951446</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import axios from "axios";
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
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
  });

  const interests = [
    "React JS",
    "JavaScript",
    "UI Design",
    "Frontend",
    "Backend",
  ];

  // INPUT CHANGE HANDLER
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedInterest) {
      alert("Please select an interest");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...formData,
        interest: selectedInterest,
      };

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/register`,
        payload
      );

      // REDIRECT TO PAYSTACK
      window.location.href = res.data.authorization_url;
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

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

          <form onSubmit={handleSubmit}>
            {/* FULL NAME */}
            <div className="input-group">
              <FiUser className="input-icon" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="input-group">
              <FiMail className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* PHONE */}
            <div className="input-group">
              <FiPhone className="input-icon" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* LOCATION */}
            <div className="input-group">
              <FiMapPin className="input-icon" />
              <input
                type="text"
                name="location"
                placeholder="Your Location"
                value={formData.location}
                onChange={handleChange}
                required
              />
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

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="register-btn"
              disabled={loading}
            >
              {loading ? "Processing..." : "Make Payment"}
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
