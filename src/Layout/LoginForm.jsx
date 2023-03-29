import { useRef } from "react";
import classes from './LoginForm.module.css'
const LoginForm = () => {
  const enteredUserIdref = useRef();
  const enteredUserPasswordref = useRef();
  const onLoginSubmitHandler = (event) => {
    event.preventDefault();
    const enteredUserID = enteredUserIdref.current.value;
    const enteredUserPassword = enteredUserPasswordref.current.value;
    enteredUserIdref.current.value=''
    enteredUserPasswordref.current.value=''
    const loginStatus = {
      userID:enteredUserID,
      loggedIn:true
    }
    localStorage.setItem('userLoggedIn',JSON.stringify(loginStatus))
  };
  return (
    <div className={classes.LoginForm}>
      <div>
        <h1 className={classes['title']}>Login Form</h1>
      </div>
      <form className={classes['form']}>
        <input type="text" ref={enteredUserIdref} placeholder={'username'} />
        <input type="password" ref={enteredUserPasswordref} placeholder={'password'}/>
        <button onClick={onLoginSubmitHandler} type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
