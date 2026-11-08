import React, { useEffect, useRef, useState } from "react";

function Otp_Generator() {
  const [otp, setOtp] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const [message, setMessage] = useState("");

  const intervalRef = useRef(null);

  const generateOTP = () => {
    // Clear previous interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();

    setOtp(newOtp);
    setUserOtp("");
    setMessage("");
    setTimer(30);

    alert(`Your OTP is: ${newOtp}`);

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setOtp("");
          setMessage("OTP Expired!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const verifyOTP = () => {
    if (!otp) {
      setMessage("Please generate OTP first.");
      return;
    }

    if (timer === 0) {
      setMessage("OTP Expired!");
      return;
    }

    if (userOtp === otp) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;

      setMessage(" OTP Verified Successfully!");
      setOtp("");
      setTimer(0);
    } else {
      setMessage(" Invalid OTP!");
    }
  };

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h2>OTP Verification</h2>

      <button onClick={generateOTP} disabled={timer > 0}>
        Generate OTP
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter 4-digit OTP"
        value={userOtp}
        maxLength={4}
        inputMode="numeric"
        onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "");
          setUserOtp(value);
        }}
      />

      <button
        onClick={verifyOTP}
        disabled={!otp || userOtp.length !== 4}
        style={{ marginLeft: "10px" }}
      >
        Verify OTP
      </button>

      <h3>Timer: {timer} sec</h3>

      <p
        style={{
          color: message.includes("Successfully")
            ? "green"
            : message.includes("Invalid") || message.includes("Expired")
            ? "red"
            : "black",
          fontWeight: "bold",
        }}
      >
        {message}
      </p>
    </div>
  );
}

export default Otp_Generator;