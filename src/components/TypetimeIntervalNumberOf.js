import { useMemo } from "react";
import styles from "./TypetimeIntervalNumberOf.module.css";

const TypetimeIntervalNumberOf = ({
  typetimeIntervalNumberOfPadding,
  typetimeIntervalNumberOfBoxSizing,
}) => {
  const typetimeIntervalNumberOfStyle = useMemo(() => {
    return {
      padding: typetimeIntervalNumberOfPadding,
      boxSizing: typetimeIntervalNumberOfBoxSizing,
    };
  }, [typetimeIntervalNumberOfPadding, typetimeIntervalNumberOfBoxSizing]);

  return (
    <div
      className={styles.typetimeIntervalNumberOf}
      style={typetimeIntervalNumberOfStyle}
    >
      <div className={styles.jan1}>Jan 1</div>
      <div className={styles.jan1}>Jan 4</div>
      <div className={styles.jan1}>Jan 7</div>
      <div className={styles.jan1}>Jan 10</div>
      <div className={styles.jan1}>Jan 13</div>
      <div className={styles.jan1}>Jan 16</div>
      <div className={styles.jan1}>Jan 19</div>
      <div className={styles.jan1}>Jan 22</div>
      <div className={styles.jan1}>Jan 25</div>
      <div className={styles.jan1}>Jan 28</div>
    </div>
  );
};

export default TypetimeIntervalNumberOf;
