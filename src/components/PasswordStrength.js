import React, { useEffect, useState } from "react";

const PasswordStrength = ({ value }) => {
  useEffect(() => {
    checkStrength();
  }, [value]);

  const [color, setColor] = useState("red");
  const [text, setText] = useState("Weak Password");
  const hasUpperCaseLetter = /[A-Z]/.test(value) ? true : false;
  const hasLowerCaseLetter = /[a-z]/.test(value) ? true : false;
  const hasOneNumber = /\d/.test(value) ? true : false;
  const hasSpecialCharacter = /\W/.test(value) ? true : false;
  const isLength8OrMore = value.length >= 8 ? true : false;

  const conditions = [
    hasUpperCaseLetter,
    hasLowerCaseLetter,
    hasOneNumber,
    hasSpecialCharacter,
    isLength8OrMore,
  ];

  

  const trueConditions = conditions.filter(Boolean);
 
  const checkStrength = () => {
    const length = trueConditions.length;
    if (length === 5) {
      setColor("green");
      setText("Strong Password");
    }
    if (length > 2 && length <= 4) {
      setColor("orange");
      setText("Moderate Password");
    }
    if (length < 2) {
      setColor("red");
      setText("Weak Password");
    }
  };
  return (
    <div
      className="px-5 py-5"
      style={{
        backgroundColor: color,
      }}
      data-testid="passwordStrengthDiv"
    >
      <h4
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        {text}
      </h4>
    </div>
  );
};

export default PasswordStrength;
