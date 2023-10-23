import { useMemo } from "react";
import styles from "./Property1Frame1308.module.css";

const Property1Frame1308 = ({
  supporthealthykitchenin,
  property1Frame1308Width,
  property1Frame1308Position,
  property1Frame1308Top,
  property1Frame1308Left,
}) => {
  const property1Frame1308Style = useMemo(() => {
    return {
      width: property1Frame1308Width,
      position: property1Frame1308Position,
      top: property1Frame1308Top,
      left: property1Frame1308Left,
    };
  }, [
    property1Frame1308Width,
    property1Frame1308Position,
    property1Frame1308Top,
    property1Frame1308Left,
  ]);

  return (
    <div className={styles.property1frame1308} style={property1Frame1308Style}>
      <div className={styles.supporthealthykitchenin}>
        {supporthealthykitchenin}
      </div>
    </div>
  );
};

export default Property1Frame1308;
