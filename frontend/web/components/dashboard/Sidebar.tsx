"use client";
import React, { useState } from "react";
import Link from "next/link";
import style from "@/assets/styles/sidebar.module.css";
import grid from "@/assets/styles/dashboard.module.css";

export default function Sidebar() {
  const [light, setLight] = useState(true);
  return (
    <nav className={`${style.sidebar} ${grid.sidebar}`}>
      <ul className={style.menuContent}>
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/"}>
          <li>Community</li>
        </Link>
        <Link href={"/"}>
          <li>Messages</li>
        </Link>
        <Link href={"/"}>
          <li>CGPA Calculator</li>
        </Link>
        <Link href={"/"}>
          <li>Downloads</li>
        </Link>
        <Link href={"/"}>
          <li>Settings</li>
        </Link>
      </ul>
      <ul className={style.menuContent}>
        <div className={style.themeChange}>
          Light mode{" "}
          <div className={style.themeSlider} onClick={() => setLight(!light)}>
            <span
              className={`${style.sliderBlob} bg-accent ${
                light ? "left-[4px]" : "left-[33px]"
              }`}
              onClick={() => setLight(!light)}
            ></span>
            <input
              type="checkbox"
              name=""
              id=""
              className="hidden"
              checked={light}
            />
          </div>
        </div>
        <li>Logout</li>
      </ul>
    </nav>
  );
}
