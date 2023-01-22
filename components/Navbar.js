import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Link href="/">
            <Image src="/ao.png" width={60} height={50} alt="image" />
          </Link>
        </div>
        <div className="lists">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/users">Users</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
