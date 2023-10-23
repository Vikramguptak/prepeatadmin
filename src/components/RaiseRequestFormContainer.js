import { useMemo } from "react";
import styles from "./RaiseRequestFormContainer.module.css";

const RaiseRequestFormContainer = ({
  actionButtonText,
  propTop,
  propLeft,
  propHeight,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const raiseRequestStyle = useMemo(() => {
    return {
      left: propLeft,
      height: propHeight,
    };
  }, [propLeft, propHeight]);

  return (
    <div className={styles.groupWrapper} style={groupDivStyle}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.raiseRequest} style={raiseRequestStyle}>
          {actionButtonText}
        </div>
      </div>
    </div>
  );
};

export default RaiseRequestFormContainer;
