"use client";
import React from "react";
import Nav from "./nav/Nav";
import { AnimatePresence } from "framer-motion";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isActive, setIsActive] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div>
        <div className={styles.header}>
          <div onClick={() => setIsActive(!isActive)} className={styles.button}>
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            />
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
