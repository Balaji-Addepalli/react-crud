import classes from "./UserCard.module.css";
const UserCard = ({ user }) => {
  return (
    <div className={classes.UserCard}>
      <div className={classes['user-details-container']}>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
