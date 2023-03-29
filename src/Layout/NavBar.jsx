import SignIn from "./SignIn";
import classes from './NavBar.module.css'
const NavBar = () => {
  return (
      <nav className={classes['navigation-bar']}>
        <div>Home</div>
        <SignIn />
      </nav>
  );
};

export default NavBar;
