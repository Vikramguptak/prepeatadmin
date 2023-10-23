import { useMemo } from "react";
import styles from "./Property1Frame1305.module.css";

const Property1Frame1305 = ({
  property1Frame1305Width,
  property1Frame1305Position,
  property1Frame1305Top,
  property1Frame1305Left,
}) => {
  const property1Frame1305Style = useMemo(() => {
    return {
      width: property1Frame1305Width,
      position: property1Frame1305Position,
      top: property1Frame1305Top,
      left: property1Frame1305Left,
    };
  }, [
    property1Frame1305Width,
    property1Frame1305Position,
    property1Frame1305Top,
    property1Frame1305Left,
  ]);

  return (
    <div className={styles.property1frame1305} style={property1Frame1305Style}>
      <div className={styles.privacyPolicy}>Privacy Policy</div>
    </div>
  );
};

export default Property1Frame1305;
