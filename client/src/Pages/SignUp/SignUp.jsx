import React, { useState } from "react";
import SignUpForm from "../../Components/SignUp/SignUpForm";
import LoginForm from "../../Components/Login/LoginForm";
import style from "./Style.module.css"

const SignUp = () => {
  const [displayComponent, setDisplayComponent] = useState(null);

  const handleButtonClick = (component) => {
    setDisplayComponent(component);
  };

  return (
    <div className={style.container}>
      <h2>QUIZZIE</h2>
      <div>
        <button className={style.signUp} onClick={() => handleButtonClick("signup")}>Sign Up</button>
        <button className={style.signUp} onClick={() => handleButtonClick("login")}>Login</button>
      </div>
      <div>
        {displayComponent === "signup" && <SignUpForm />}
        {displayComponent === "login" && <LoginForm />}
      </div>
    </div>
  );
};

export default SignUp;
