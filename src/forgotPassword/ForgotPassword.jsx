import React from "react";

const ForgotPassword = () => {
  return (
    <div className="forgotUser">
      <h3>Forgot Password ?</h3>
      <form className="forgotUserForm">
        <div className="forgotUserInput">
          <label className="forgotEmail">Email:</label>
          <input
            type="email"
            id="forgotEmail"
            placeholder="Enter yout Email"
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
