import React, { useState } from "react";
import PasswordStrength from "./PasswordStrength";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="layout-column align-items-center justify-content-center py-40 mt-100">
      <div className="card w-50 px-75 py-30">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Enter Your Password</h2>
          <div className="layout-column mb-10">
            <input
              type={showPassword ? "text" : "password"}
              id="name"
              placeholder="Enter Password"
              data-testid="passwordInput"
              value={password}
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="py-10" data-testid="buttonDiv">
          <button onClick={handleShowPassword}>
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
          <button onClick={() => setPassword("")}>Clear Password</button>
        </div>
      </div>
      <div className="w-50 py-20">
        <PasswordStrength value={password} />
      </div>
    </div>
  );
};

export default PasswordChecker;
