import { useMemo } from "react";
import styles from "./Property1Frame1304.module.css";

const Property1Frame1304 = ({
  property1Frame1304Width,
  property1Frame1304Position,
  property1Frame1304Top,
  property1Frame1304Left,
}) => {
  const property1Frame1304Style = useMemo(() => {
    return {
      width: property1Frame1304Width,
      position: property1Frame1304Position,
      top: property1Frame1304Top,
      left: property1Frame1304Left,
    };
  }, [
    property1Frame1304Width,
    property1Frame1304Position,
    property1Frame1304Top,
    property1Frame1304Left,
  ]);

  return (
    <div className={styles.property1frame1304} style={property1Frame1304Style}>
      <div className={styles.termsConditions}>{`Terms & Conditions`}</div>
    </div>
  );
};

export default Property1Frame1304;
