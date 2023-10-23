import { useMemo } from "react";
import styles from "./Property1Frame1309.module.css";

const Property1Frame1309 = ({
  property1Frame1309Width,
  property1Frame1309Position,
  property1Frame1309Top,
  property1Frame1309Left,
}) => {
  const property1Frame1309Style = useMemo(() => {
    return {
      width: property1Frame1309Width,
      position: property1Frame1309Position,
      top: property1Frame1309Top,
      left: property1Frame1309Left,
    };
  }, [
    property1Frame1309Width,
    property1Frame1309Position,
    property1Frame1309Top,
    property1Frame1309Left,
  ]);

  return (
    <div className={styles.property1frame1309} style={property1Frame1309Style}>
      <div className={styles.div}>+91 789-123-5831</div>
    </div>
  );
};

export default Property1Frame1309;
