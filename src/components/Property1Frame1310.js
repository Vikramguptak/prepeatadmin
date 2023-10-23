import { useMemo } from "react";
import styles from "./Property1Frame1310.module.css";

const Property1Frame1310 = ({
  property1Frame1310Width,
  property1Frame1310Position,
  property1Frame1310Top,
  property1Frame1310Left,
}) => {
  const property1Frame1310Style = useMemo(() => {
    return {
      width: property1Frame1310Width,
      position: property1Frame1310Position,
      top: property1Frame1310Top,
      left: property1Frame1310Left,
    };
  }, [
    property1Frame1310Width,
    property1Frame1310Position,
    property1Frame1310Top,
    property1Frame1310Left,
  ]);

  return (
    <div className={styles.property1frame1310} style={property1Frame1310Style}>
      <div className={styles.div}>+91 213-789-4563</div>
    </div>
  );
};

export default Property1Frame1310;
