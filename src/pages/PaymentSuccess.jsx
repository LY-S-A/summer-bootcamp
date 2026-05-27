import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { FiCheckCircle, FiXCircle, FiLoader } from "react-icons/fi";
import "../styles/paymentSuccess.css";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get("reference");

  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/register/verify?reference=${reference}`
        );

        if (res.data.success) {
          setStatus("success");
        } else {
          setStatus("failed");
        }
      } catch (err) {
        setStatus("failed");
      }
    };

    if (reference) {
      verifyPayment();
    }
  }, [reference]);

  const joinWhatsApp = () => {
    window.location.href =
      "https://chat.whatsapp.com/YOUR_GROUP_LINK";
  };

  return (
    <div className="payment-page">
      <div className="bg-circle circle-1"></div>
      <div className="bg-circle circle-2"></div>

      <div className="payment-card">
        {/* VERIFYING */}
        {status === "verifying" && (
          <div className="state-box">
            <FiLoader className="icon spin" />
            <h2>Verifying Payment...</h2>
            <p>Please wait while we confirm your transaction.</p>
          </div>
        )}

        {/* SUCCESS */}
        {status === "success" && (
          <div className="state-box">
            <FiCheckCircle className="icon success" />
            <h2>Payment Successful 🎉</h2>
            <p>
              Welcome to Summer Bootcamp 2.0. Your registration is confirmed.
            </p>

            <button className="whatsapp-btn" onClick={joinWhatsApp}>
              Join WhatsApp Group
            </button>
          </div>
        )}

        {/* FAILED */}
        {status === "failed" && (
          <div className="state-box">
            <FiXCircle className="icon error" />
            <h2>Payment Failed ❌</h2>
            <p>We could not verify your payment. Please try again.</p>

            <button className="back-btn" onClick={() => (window.location.href = "/")}>
              Go Back to Registration
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
