import { useMemo } from "react";
import styles from "./Property1Frame1302.module.css";

const Property1Frame1302 = ({
  property1Frame1302Width,
  property1Frame1302Position,
  property1Frame1302Top,
  property1Frame1302Left,
}) => {
  const property1Frame1302Style = useMemo(() => {
    return {
      width: property1Frame1302Width,
      position: property1Frame1302Position,
      top: property1Frame1302Top,
      left: property1Frame1302Left,
    };
  }, [
    property1Frame1302Width,
    property1Frame1302Position,
    property1Frame1302Top,
    property1Frame1302Left,
  ]);

  return (
    <div className={styles.property1frame1302} style={property1Frame1302Style}>
      <div className={styles.contactUs}>Contact Us</div>
    </div>
  );
};

export default Property1Frame1302;
