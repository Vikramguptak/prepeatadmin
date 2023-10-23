import RaiseRequestFormContainer from "./RaiseRequestFormContainer";
import styles from "./ChangeNumberForm.module.css";

const ChangeNumberForm = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.glasssetParent}>
        <div className={styles.glassset} />
        <b className={styles.changeYourNumber}>Change your number</b>
        <div className={styles.groupWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.oldNumber}>Old Number</div>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupItem} />
              <div className={styles.newNumber}>New Number</div>
            </div>
            <div className={styles.otpWrapper}>
              <div className={styles.otp}>{`OTP `}</div>
            </div>
          </div>
        </div>
        <RaiseRequestFormContainer
          actionButtonText="Set Number"
          propTop="490px"
          propLeft="calc(50% - 251.3px)"
          propHeight="30px"
        />
        <img className={styles.groupInner} alt="" src="/vector-22.svg" />
        <div className={styles.resendOtp}>Resend Otp?</div>
      </div>
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <img className={styles.groupIcon1} alt="" src="/group.svg" />
    </div>
  );
};

export default ChangeNumberForm;
