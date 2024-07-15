import React from "react";
import grid from '@/assets/styles/dashboard.module.css'

export default function Header() {
  return (
    <header className={grid.header}>
      <div className="logo">
        <h3 className="text-2xl font-bold">Edushare</h3>
      </div>
    </header>
  );
}
