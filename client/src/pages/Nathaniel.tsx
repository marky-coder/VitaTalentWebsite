// client/src/pages/Nathaniel.tsx
import React from "react";
import styles from "./Nathaniel.module.css";

export default function Nathaniel(): JSX.Element {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div
          className={styles.card}
          role="region"
          aria-label="Nathaniel Card"
        >
          <h2 className={styles.title}>NATHANIEL</h2>
        </div>
      </div>
    </div>
  );
}
