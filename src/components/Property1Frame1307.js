import { useMemo } from "react";
import styles from "./Property1Frame1307.module.css";

const Property1Frame1307 = ({
  property1Frame1307Width,
  property1Frame1307Position,
  property1Frame1307Top,
  property1Frame1307Left,
  rEACHUSFontFamily,
  rEACHUSFontWeight,
}) => {
  const property1Frame1307Style = useMemo(() => {
    return {
      width: property1Frame1307Width,
      position: property1Frame1307Position,
      top: property1Frame1307Top,
      left: property1Frame1307Left,
    };
  }, [
    property1Frame1307Width,
    property1Frame1307Position,
    property1Frame1307Top,
    property1Frame1307Left,
  ]);

  const rEACHUSStyle = useMemo(() => {
    return {
      fontFamily: rEACHUSFontFamily,
      fontWeight: rEACHUSFontWeight,
    };
  }, [rEACHUSFontFamily, rEACHUSFontWeight]);

  return (
    <div className={styles.property1frame1307} style={property1Frame1307Style}>
      <div className={styles.reachUs} style={rEACHUSStyle}>
        REACH US
      </div>
    </div>
  );
};

export default Property1Frame1307;
