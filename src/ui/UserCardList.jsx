import classes from './UserForm.module.css'
import UserCard from './UserCard';
const UserCardList = ({users}) => {
  return (
    <div className={classes['UserCardList']}>
        {
            users.map(user=><UserCard user={user}/>)
        }
    </div>
  );
};

export default UserCardList;
