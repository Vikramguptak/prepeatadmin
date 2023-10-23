import { useMemo } from "react";
import styles from "./Property1Frame1301.module.css";

const Property1Frame1301 = ({
  property1Frame1301Width,
  property1Frame1301Position,
  property1Frame1301Top,
  property1Frame1301Left,
}) => {
  const property1Frame1301Style = useMemo(() => {
    return {
      width: property1Frame1301Width,
      position: property1Frame1301Position,
      top: property1Frame1301Top,
      left: property1Frame1301Left,
    };
  }, [
    property1Frame1301Width,
    property1Frame1301Position,
    property1Frame1301Top,
    property1Frame1301Left,
  ]);

  return (
    <div className={styles.property1frame1301} style={property1Frame1301Style}>
      <div className={styles.aboutUs}>About Us</div>
    </div>
  );
};

export default Property1Frame1301;
