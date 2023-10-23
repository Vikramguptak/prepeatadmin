import { useMemo } from "react";
import styles from "./Property1Frame1299.module.css";

const Property1Frame1299 = ({
  property1Frame1299Width,
  property1Frame1299Position,
  property1Frame1299Top,
  property1Frame1299Left,
  qUICKLINKSFontFamily,
  qUICKLINKSFontWeight,
}) => {
  const property1Frame1299Style = useMemo(() => {
    return {
      width: property1Frame1299Width,
      position: property1Frame1299Position,
      top: property1Frame1299Top,
      left: property1Frame1299Left,
    };
  }, [
    property1Frame1299Width,
    property1Frame1299Position,
    property1Frame1299Top,
    property1Frame1299Left,
  ]);

  const qUICKLINKSStyle = useMemo(() => {
    return {
      fontFamily: qUICKLINKSFontFamily,
      fontWeight: qUICKLINKSFontWeight,
    };
  }, [qUICKLINKSFontFamily, qUICKLINKSFontWeight]);

  return (
    <div className={styles.property1frame1299} style={property1Frame1299Style}>
      <div className={styles.quickLinks} style={qUICKLINKSStyle}>
        QUICK LINKS
      </div>
    </div>
  );
};

export default Property1Frame1299;
