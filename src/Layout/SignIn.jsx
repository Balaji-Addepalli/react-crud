import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./SignIn.module.css";
const SignIn = () => {
  const navigate = useNavigate()
  //{isLoggedIn} will mention this later
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onSignInClickHandler = () => {
    setIsLoggedIn(true);
    navigate('/home');
  };
  const onSignOutClickHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <button
      className={classes.button}
      onClick={isLoggedIn ? onSignOutClickHandler : onSignInClickHandler}
    >{`${isLoggedIn ? "Sign-Out" : "Sign-In"}`}</button>
  );
};

export default SignIn;
