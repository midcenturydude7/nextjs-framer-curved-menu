"use client";
import React from "react";
import Nav from "./nav/Nav";
import { AnimatePresence } from "framer-motion";
import styles from "./style.module.scss";

export default function Header() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <>
      <div onClick={() => setIsActive(!isActive)} className={styles.button}>
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        />
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
