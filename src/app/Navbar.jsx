import Link from "next/link";

export default function Navbar() {
  return (
    <ul className="nav">
      <li>
        <Link className="nav__itemLinks" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav__itemLinks" href="/profile">
          Profile
        </Link>
      </li>
    </ul>
  );
}
