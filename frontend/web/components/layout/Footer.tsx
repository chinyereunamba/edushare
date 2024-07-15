import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-screen-xl w-full m-auto p-3">
        <div className="flex">
          <div className="logo p-3 w-1/2 lg:border-r-2 lg:border-white">Educare</div>
          <div className="links p-3 w-1/2">
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
