import { useMemo } from "react";
import styles from "./SummaryContainer.module.css";

const SummaryContainer = ({
  dimensionLabel,
  numericValue,
  metricLabel,
  propLeft,
  propTop,
}) => {
  const frameDiv4Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={styles.quantityParent} style={frameDiv4Style}>
      <img className={styles.quantityIcon} alt="" src={dimensionLabel} />
      <div className={styles.parent}>
        <div className={styles.div}>{numericValue}</div>
        <div className={styles.totalUsers}>{metricLabel}</div>
      </div>
    </div>
  );
};

export default SummaryContainer;
