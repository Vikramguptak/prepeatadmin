import styles from "./TC.module.css";

const TC = () => {
  return (
    <div className={styles.tc}>
      <div className={styles.tcChild} />
      <img
        className={styles.socialIconAndLogo}
        alt=""
        src="/social-icon-and-logo1.svg"
      />
      <div className={styles.aboutMe}>
        <div className={styles.termsAndConditions}>Terms and Conditions</div>
        <div className={styles.termsATermsContainer}>
          <p className={styles.terms}>Terms</p>
          <p className={styles.terms}>
            A terms and conditions agreement outlines the website
            administrator’s rules regarding user behavior, and provides
            information about the actions the website administrator can and will
            perform.
          </p>
          <p className={styles.terms}>&nbsp;</p>
          <p className={styles.terms}>User License</p>
          <p className={styles.terms}>
            A terms and conditions agreement outlines the website
            administrator’s rules regarding user behavior, and provides
            information about the actions the website administrator can and will
            perform.
          </p>
          <p className={styles.terms}>
            Your terms and conditions text is a contract between your website
            and its users. In the event of a legal dispute, arbitrators will
            look to this agreement to determine whether each party acted within
            their rights
          </p>
          <p className={styles.terms}>&nbsp;</p>
          <p className={styles.terms}>Our Privacy Policy</p>
          <p className={styles.terms}>
            A terms and conditions agreement outlines the website
            administrator’s rules regarding user behavior, and provides
            information about the actions the website administrator can and will
            perform.
          </p>
          <p className={styles.blankLine2}>&nbsp;</p>
        </div>
      </div>
      <div className={styles.tc1}>{`T&C`}</div>
      <div className={styles.home}>Home</div>
      <div className={styles.about}>About</div>
      <div className={styles.contactUs}>Contact Us</div>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img className={styles.asset21} alt="" src="/asset-2-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default TC;
