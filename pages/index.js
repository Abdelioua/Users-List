import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abderrahmane | Home</title>
      </Head>
      <div>
        <h1>Homepage</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias magnam
          ducimus debitis mollitia corporis nesciunt quasi fugit a. Animi saepe,
          temporibus dolore obcaecati itaque maxime aliquid maiores atque
          assumenda accusantium!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias magnam
          ducimus debitis mollitia corporis nesciunt quasi fugit a. Animi saepe,
          temporibus dolore obcaecati itaque maxime aliquid maiores atque
          assumenda accusantium!
        </p>
        <Link className={styles.btn} href="/users">
          Go to Users page
        </Link>
      </div>
    </>
  );
}
