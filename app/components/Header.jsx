"use client";
import React from "react";
import styles from "./style.module.scss";

export default function Header() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <>
      <div onClick={() => setIsActive(!isActive)} className={styles.button}>
        <div
          className={`${styles.burger} ${
            isActive ? styles.burgerActive : ""
          }`}></div>
      </div>
    </>
  );
}
