import classes from "./Home.module.css";
const Home = () => {
  return (
    <div className={classes.Home}>
      <div className={classes['card-container']}>
        <h1 className={classes['card-heading']}>Select Storgae</h1>
      <div className={classes['button-container']}>
        <button className={classes["local-button"]}>Local</button>
        <button className={classes["cloud-button"]}>Cloud</button>
      </div>
      </div>
    </div>
  );
};

export default Home;
