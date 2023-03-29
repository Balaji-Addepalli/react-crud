import { usersSelector } from "../redux-tool/slice/usersSlice";
import { useState, useEffect, useRef, useId } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../redux-tool/slice/usersSlice";
import classes from "./UserForm.module.css";
const UserForm = () => {
  const [refreshFormToggler, setRefreshFormToggler] = useState(true);
  const nameRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef();
  const aboutRef = useRef();
  const dateRef = useRef();
  const userDispatch = useDispatch();
  const users = useSelector(usersSelector);
  const uniqueId = useId()
  useEffect(() => {
    nameRef.current.value = "";
    roleRef.current.value = "";
    emailRef.current.value = "";
    aboutRef.current.value = "";
  }, [refreshFormToggler]);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      lastName: roleRef.current.value,
      about: aboutRef.current.value,
      
    };
    userDispatch(addUser({ user }));
    setRefreshFormToggler((prevState) => !prevState);
  };
  return (
    <div className={classes.UserForm}>
      <h1>User Form</h1>
      <form onSubmit={onSubmitHandler} className={classes.form}>
        <div className={classes["name-email-container"]}>
          <input type="text" ref={nameRef} required placeholder="name" />
          <input type="email" ref={emailRef} required placeholder="email" />
        </div>
        <div className={classes["role-date-container"]}>
          <input type="text" ref={roleRef} required placeholder="role" />
          <input type="date" ref={dateRef} />
        </div>
        <div className={classes["text-area-container"]}>
          <textarea
            cols="300"
            rows="5"
            ref={aboutRef}
            placeholder="write something"
          />
        </div>
        <div className={classes["submit-button-container"]}>
          <input className={classes["submit-button"]} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
