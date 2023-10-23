import { useMemo } from "react";
import FormOTPFill from "./FormOTPFill";
import styles from "./FormOTPFull.module.css";

const FormOTPFull = ({
  text,
  formOTPFullPosition,
  formOTPFullTop,
  formOTPFullLeft,
  formOTPFullWidth,
  formOTPFullHeight,
  shapeBorderRadius,
  shapeBorder,
  shapeBoxSizing,
  shapeBorderRadius1,
  shapeBorderRadius2,
  shapeBorderRadius3,
}) => {
  const formOTPFullStyle = useMemo(() => {
    return {
      position: formOTPFullPosition,
      top: formOTPFullTop,
      left: formOTPFullLeft,
      width: formOTPFullWidth,
      height: formOTPFullHeight,
    };
  }, [
    formOTPFullPosition,
    formOTPFullTop,
    formOTPFullLeft,
    formOTPFullWidth,
    formOTPFullHeight,
  ]);

  const shapeStyle = useMemo(() => {
    return {
      borderRadius: shapeBorderRadius,
      border: shapeBorder,
      boxSizing: shapeBoxSizing,
    };
  }, [shapeBorderRadius, shapeBorder, shapeBoxSizing]);

  const shape1Style = useMemo(() => {
    return {
      borderRadius: shapeBorderRadius1,
    };
  }, [shapeBorderRadius1]);

  const shape2Style = useMemo(() => {
    return {
      borderRadius: shapeBorderRadius2,
    };
  }, [shapeBorderRadius2]);

  const shape3Style = useMemo(() => {
    return {
      borderRadius: shapeBorderRadius3,
    };
  }, [shapeBorderRadius3]);

  return (
    <div className={styles.formOtpFull} style={formOTPFullStyle}>
      <FormOTPFill
        text="1"
        formOTPFillPosition="relative"
        formOTPFillTop="unset"
        formOTPFillLeft="unset"
        shapeBorderRadius="25px"
        shapeBorder="unset"
        shapeBoxSizing="unset"
      />
      <div className={styles.formOtpEmpty}>
        <div className={styles.shape} style={shape1Style} />
      </div>
      <div className={styles.formOtpEmpty}>
        <div className={styles.shape} style={shape2Style} />
      </div>
      <div className={styles.formOtpEmpty}>
        <div className={styles.shape} style={shape3Style} />
      </div>
    </div>
  );
};

export default FormOTPFull;
