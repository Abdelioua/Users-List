import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [redir, setRedir] = useState(3);

  const redierct = useRouter();
  useEffect(() => {
    const time = setInterval(() => {
      setRedir((val) => (val -= 1));
    }, 1000);

    const timer = setTimeout(() => {
      redierct.push("/");
    }, 3000);

    return () => {
      clearInterval(time);
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="not-found">
      <h1>Oops we hit a Road block!!</h1>
      <h2>Page could not be found</h2>
      <p>
        Back to homePage <Link href="/">Homepage</Link> redirecting in: {redir}
      </p>
    </div>
  );
};

export default NotFound;
