import { useMemo } from "react";
import styles from "./Property1Frame1303.module.css";

const Property1Frame1303 = ({
  property1Frame1303Width,
  property1Frame1303Position,
  property1Frame1303Top,
  property1Frame1303Left,
}) => {
  const property1Frame1303Style = useMemo(() => {
    return {
      width: property1Frame1303Width,
      position: property1Frame1303Position,
      top: property1Frame1303Top,
      left: property1Frame1303Left,
    };
  }, [
    property1Frame1303Width,
    property1Frame1303Position,
    property1Frame1303Top,
    property1Frame1303Left,
  ]);

  return (
    <div className={styles.property1frame1303} style={property1Frame1303Style}>
      <div className={styles.pricing}>Pricing</div>
    </div>
  );
};

export default Property1Frame1303;
