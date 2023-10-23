import styles from "./Group.module.css";

const Group = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.groupItem} alt="" src="/group-36.svg" />
        <div className={styles.reachUsOn}>Reach us on</div>
        <div className={styles.copyright2023}>
          Copyright © 2023 Healthykitchen. All rights reserved.
        </div>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <img className={styles.imageIcon1} alt="" src="/image1@2x.png" />
        <div className={styles.component100}>
          <div className={styles.reachUs}>REACH US</div>
        </div>
      </div>
      <div className={styles.component92}>
        <div className={styles.quickLinks}>QUICK LINKS</div>
      </div>
      <div className={styles.component93}>
        <div className={styles.faq}>FAQ</div>
      </div>
      <div className={styles.component94}>
        <div className={styles.aboutUs}>About Us</div>
      </div>
      <div className={styles.component95}>
        <div className={styles.contactUs}>Contact Us</div>
      </div>
      <div className={styles.component96}>
        <div className={styles.pricing}>Pricing</div>
      </div>
      <div className={styles.component97}>
        <div className={styles.termsConditions}>{`Terms & Conditions`}</div>
      </div>
      <div className={styles.component98}>
        <div className={styles.pricing}>Privacy Policy</div>
      </div>
      <div className={styles.component103}>
        <div className={styles.supporthealthykitchenin}>support@prepeat.in</div>
      </div>
      <div className={styles.component102}>
        <div className={styles.div}>+91 789-123-5831</div>
      </div>
      <div className={styles.component101}>
        <div className={styles.div}>+91 213-789-4563</div>
      </div>
    </div>
  );
};

export default Group;
