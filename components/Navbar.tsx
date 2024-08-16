import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">Library Website</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={'/books'}>Discover Books</Link>
            </li>
            <li>
              <Link href={'/authors'}>Discover Authors</Link>
            </li>
            <li>
              <Link href={'/category'}>Discover Categories</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
