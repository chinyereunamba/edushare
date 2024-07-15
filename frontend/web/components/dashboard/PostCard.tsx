import React from "react";
import style from "@/assets/styles/dashboard.module.css";

export default function PostCard() {
  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <div className={style.img}></div>
        <div >
          <p className="text-lg">John Amadi</p>
          <p className="text-sm font-bold text-gray-500">200L UNICAL</p>
        </div>
      </div>
      <div className={style.cardBody}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nisi
          aliquid omnis excepturi dolorum, sit ratione, possimus consequatur
          deserunt iure obcaecati quibusdam repellendus explicabo cumque?
        </p>
      </div>
      <div className={style.cardFooter}>
        <span>25</span>
        <span>60</span>
        <span>180</span>
      </div>
    </div>
  );
}
