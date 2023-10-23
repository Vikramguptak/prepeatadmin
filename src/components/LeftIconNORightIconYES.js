import { useMemo } from "react";
import ChevronDown24 from "./ChevronDown24";
import TypeFullWidth from "./TypeFullWidth";
import styles from "./LeftIconNORightIconYES.module.css";

const LeftIconNORightIconYES = ({
  cardHeader,
  rightValue,
  rightValueColor,
  dividerBackgroundColor,
}) => {
  const rightValueStyle = useMemo(() => {
    return {
      color: rightValueColor,
    };
  }, [rightValueColor]);

  const typeFullWidthStyle = useMemo(() => {
    return {
      backgroundColor: dividerBackgroundColor,
    };
  }, [dividerBackgroundColor]);

  return (
    <div className={styles.leftIconnoRightIconyes}>
      <div className={styles.contentWrapper}>
        <div className={styles.cardHeader}>{cardHeader}</div>
        <div className={styles.rightValue}>
          <div className={styles.rightValue1} style={rightValueStyle}>
            {rightValue}
          </div>
          <ChevronDown24 />
        </div>
      </div>
      <TypeFullWidth
        typeFullWidthAlignSelf="stretch"
        typeFullWidthBackgroundColor="#eef2f5"
      />
    </div>
  );
};

export default LeftIconNORightIconYES;
