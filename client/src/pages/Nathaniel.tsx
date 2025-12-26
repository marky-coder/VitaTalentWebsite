// client/src/pages/Nathaniel.tsx
import React from "react";
import styles from "./Nathaniel.module.css";

/**
 * Nathaniel page — neon-corner rotating border card.
 * Uses a CSS module for the animated ::before (rotating gradient)
 * and ::after (inner mask) technique.
 */
export default function Nathaniel(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f1113]">
      <div className={styles.card} role="region" aria-label="Nathaniel Card">
        <h2 className={styles.title}>NATHANIEL</h2>
      </div>
    </div>
  );
}
