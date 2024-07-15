import React from "react";
import Sidebar from "../dashboard/Sidebar";
import Header from "../dashboard/Header";
import style from "@/assets/styles/dashboard.module.css";

type Props = {
  children: React.ReactNode;
};

export default function DashboardContainer({ children }: Props) {
  return (
    <main className={style.dashboardContainer}>
      <Sidebar />
      <div className={style.page}>
        <Header />
        <section className={style.content}>{children}</section>
      </div>
    </main>
  );
}
