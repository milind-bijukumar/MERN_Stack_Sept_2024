import styles from "./users.module.css";

const UserList = ({ userData }) => {
  console.log(styles);
  console.log(userData);
  return (
    <>
      <ul className={styles.userItems}>
        {userData.map((user) => {
          return (
            <li
              key={user.id}
              id={user.id}
              //   style={{
              //     listStyle: "none",
              //     margin: "10px",
              //     padding: "5px",
              //     backgroundColor: "grey",
              //   }}
              className={styles.userItem}
            >
              Welcome, {user.name} and your age is {user.age}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserList;
