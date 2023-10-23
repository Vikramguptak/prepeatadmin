import { useMemo } from "react";
import styles from "./TypeFullWidth.module.css";

const TypeFullWidth = ({
  typeFullWidthAlignSelf,
  typeFullWidthBackgroundColor,
}) => {
  const typeFullWidthStyle = useMemo(() => {
    return {
      alignSelf: typeFullWidthAlignSelf,
      backgroundColor: typeFullWidthBackgroundColor,
    };
  }, [typeFullWidthAlignSelf, typeFullWidthBackgroundColor]);

  return <div className={styles.typefullWidth} style={typeFullWidthStyle} />;
};

export default TypeFullWidth;
