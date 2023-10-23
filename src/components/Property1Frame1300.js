import { useMemo } from "react";
import styles from "./Property1Frame1300.module.css";

const Property1Frame1300 = ({
  property1Frame1300Width,
  property1Frame1300Position,
  property1Frame1300Top,
  property1Frame1300Left,
}) => {
  const property1Frame1300Style = useMemo(() => {
    return {
      width: property1Frame1300Width,
      position: property1Frame1300Position,
      top: property1Frame1300Top,
      left: property1Frame1300Left,
    };
  }, [
    property1Frame1300Width,
    property1Frame1300Position,
    property1Frame1300Top,
    property1Frame1300Left,
  ]);

  return (
    <div className={styles.property1frame1300} style={property1Frame1300Style}>
      <div className={styles.faq}>FAQ</div>
    </div>
  );
};

export default Property1Frame1300;
