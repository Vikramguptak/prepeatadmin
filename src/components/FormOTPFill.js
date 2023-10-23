import { useMemo } from "react";
import styles from "./FormOTPFill.module.css";

const FormOTPFill = ({
  text,
  formOTPFillPosition,
  formOTPFillTop,
  formOTPFillLeft,
  shapeBorderRadius,
  shapeBorder,
  shapeBoxSizing,
}) => {
  const formOTPFillStyle = useMemo(() => {
    return {
      position: formOTPFillPosition,
      top: formOTPFillTop,
      left: formOTPFillLeft,
    };
  }, [formOTPFillPosition, formOTPFillTop, formOTPFillLeft]);

  const shapeStyle = useMemo(() => {
    return {
      borderRadius: shapeBorderRadius,
      border: shapeBorder,
      boxSizing: shapeBoxSizing,
    };
  }, [shapeBorderRadius, shapeBorder, shapeBoxSizing]);

  return (
    <div className={styles.formOtpFill} style={formOTPFillStyle}>
      <div className={styles.shape} style={shapeStyle} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default FormOTPFill;
