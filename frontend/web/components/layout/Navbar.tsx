import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="flex justify-between max-w-screen-xl w-full m-auto">
        <div className="logo">Edushare</div>
        <ul className="nav-links flex justify-between">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <div>
          <button className="button">Login</button>
          <button className="button">Login</button>
        </div>
      </nav>
    </header>
  );
}
