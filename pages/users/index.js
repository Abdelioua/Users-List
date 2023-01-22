import Link from "next/link";
import styles from "../../styles/list.module.css";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data },
  };
};

const index = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <Link href={`users/${user.id}`} className={styles.single} key={user.id}>
          <h3>{user.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default index;
