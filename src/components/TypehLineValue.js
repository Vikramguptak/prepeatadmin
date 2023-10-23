import { useMemo } from "react";
import styles from "./TypehLineValue.module.css";

const TypehLineValue = ({
  leftValue,
  typehLineValueAlignItems,
  hLineBackgroundColor,
}) => {
  const typehLineValueStyle = useMemo(() => {
    return {
      alignItems: typehLineValueAlignItems,
    };
  }, [typehLineValueAlignItems]);

  const hLineStyle = useMemo(() => {
    return {
      backgroundColor: hLineBackgroundColor,
    };
  }, [hLineBackgroundColor]);

  return (
    <div className={styles.typehLineValue} style={typehLineValueStyle}>
      <div className={styles.leftValue}>{leftValue}</div>
      <div className={styles.hLine} style={hLineStyle} />
    </div>
  );
};

export default TypehLineValue;
