import styles from "./AccountContainer.module.css";

const AccountContainer = () => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <img className={styles.asset21} alt="" src="/asset-2-12@2x.png" />
        <div className={styles.textAndSupportingText}>
          <div className={styles.text}>Create an account</div>
          <div className={styles.supportingText}>
            Boost your earnings with us
          </div>
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.form}>
          <div className={styles.inputFieldBase}>
            <div className={styles.inputWithLabel}>
              <div className={styles.label}>Email*</div>
              <div className={styles.input}>
                <div className={styles.content2}>
                  <div className={styles.text1}>Enter your email</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputFieldBase}>
            <div className={styles.inputFieldBase}>
              <div className={styles.inputWithLabel}>
                <div className={styles.label}>Password*</div>
                <div className={styles.input}>
                  <div className={styles.content3}>
                    <img className={styles.mailIcon} alt="" src="/mail.svg" />
                    <div className={styles.text1}>••••••••</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.button}>
            <div className={styles.buttonBase}>
              <div className={styles.text3}>Sign in</div>
            </div>
          </div>
          <div className={styles.socialButtonGroups}>
            <div className={styles.socialButton}>
              <img
                className={styles.socialIcon}
                alt=""
                src="/social-icon.svg"
              />
              <div className={styles.text3}>Sign in with Google</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.inputField1}>
        <div className={styles.inputFieldBase}>
          <div className={styles.inputWithLabel}>
            <div className={styles.label}>Name*</div>
            <div className={styles.input}>
              <div className={styles.content2}>
                <div className={styles.text1}>Enter your email</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountContainer;
