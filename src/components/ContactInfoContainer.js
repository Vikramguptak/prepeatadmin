import styles from "./ContactInfoContainer.module.css";

const ContactInfoContainer = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-3841.svg" />
        <div className={styles.frameItem} />
        <div className={styles.frameInner} />
        <div className={styles.contactInformation}>Contact Information</div>
        <div className={styles.carbonlocationFilledParent}>
          <img
            className={styles.carbonlocationFilledIcon}
            alt=""
            src="/carbonlocationfilled.svg"
          />
          <div className={styles.bxsphoneCallParent}>
            <img
              className={styles.bxsphoneCallIcon}
              alt=""
              src="/bxsphonecall.svg"
            />
            <div className={styles.div}>+1012 3456 789</div>
          </div>
          <div className={styles.icsharpEmailParent}>
            <img
              className={styles.bxsphoneCallIcon}
              alt=""
              src="/icsharpemail.svg"
            />
            <div className={styles.div}>demo@gmail.com</div>
          </div>
          <div className={styles.dartmouthStreetBoston}>
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </div>
        </div>
        <img className={styles.groupIcon} alt="" src="/group-1000001749.svg" />
        <img
          className={styles.frameChild1}
          alt=""
          src="/group-1000001750.svg"
        />
        <img
          className={styles.frameChild2}
          alt=""
          src="/group-1000001751.svg"
        />
        <img
          className={styles.claritycursorHandClickLineIcon}
          alt=""
          src="/claritycursorhandclickline.svg"
        />
      </div>
    </div>
  );
};

export default ContactInfoContainer;
