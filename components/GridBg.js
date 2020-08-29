import styles from "../styles/GridBg.module.css";

export function GridBg() {
  return (
    <div className={styles.container}>
      {Array.from({ length: 8 }, (x, i) => (
        <div key={i} className={styles.inner} />
      ))}
    </div>
  );
}
