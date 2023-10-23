import RaiseRequestFormContainer from "./RaiseRequestFormContainer";
import styles from "./ChangePasswordForm.module.css";

const ChangePasswordForm = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.glasssetParent}>
        <div className={styles.glassset} />
        <b className={styles.changeYourPassword}>Change your password</b>
        <div className={styles.groupWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.password}>Password</div>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupItem} />
              <div className={styles.div}>..........</div>
              <div className={styles.div1}>..........</div>
              <div className={styles.newPassword}>New Password</div>
            </div>
          </div>
        </div>
        <RaiseRequestFormContainer
          actionButtonText="Set Password"
          propTop="466.7px"
          propLeft="calc(50% - 254.25px)"
          propHeight="47px"
        />
        <img className={styles.groupInner} alt="" src="/vector-22.svg" />
      </div>
      <img className={styles.groupIcon} alt="" src="/group1.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.div2}>..........</div>
      <div className={styles.confirmPassword}>Confirm Password</div>
      <img className={styles.groupIcon1} alt="" src="/group2.svg" />
      <img className={styles.groupIcon2} alt="" src="/group3.svg" />
    </div>
  );
};

export default ChangePasswordForm;
