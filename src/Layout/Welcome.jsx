import classes from "./Welcome.module.css";
const Welcome = () => {
  return (
    <div className={classes['heading-container']}> 
      <h1 className={classes.heading}>Welcome Login/SignUp to continue </h1>
    </div>
  );
};

export default Welcome;
