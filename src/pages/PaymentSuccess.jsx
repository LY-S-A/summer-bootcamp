import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

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

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {status === "verifying" && <h2>Verifying payment...</h2>}
      {status === "success" && <h2>Payment Successful 🎉</h2>}
      {status === "failed" && <h2>Payment Failed ❌</h2>}
    </div>
  );
};

export default PaymentSuccess;
