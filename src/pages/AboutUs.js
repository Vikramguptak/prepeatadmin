import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUsChild} />
      <div className={styles.aboutUsItem} />
      <img
        className={styles.socialIconAndLogo}
        alt=""
        src="/social-icon-and-logo1.svg"
      />
      <div className={styles.aboutMe}>
        <div className={styles.aboutUs1}>About Us</div>
        <div className={styles.enjoyASuiteContainer}>
          <span className={styles.enjoyASuiteContainer1}>
            <p className={styles.enjoyASuite}>
              Enjoy a suite of personalised services , from gourmet dining and
              immaculate laundry care to nutritious tiffin food and homemaking
              expertise, all designed to enhance your everyday life.
            </p>
            <p className={styles.enjoyASuite}>&nbsp;</p>
            <p className={styles.enjoyASuite}>
              PrepEat brings the joy of home cooked food to your doorstep.
              Whether you are looking for a delicious hoe cooked meal, PrepEat
              has you all covered.
            </p>
          </span>
        </div>
      </div>
      <div className={styles.tc}>{`T&C`}</div>
      <div className={styles.about}>About</div>
      <div className={styles.contactUs}>Contact Us</div>
      <img className={styles.aboutUsInner} alt="" src="/group-11.svg" />
      <div className={styles.home}>Home</div>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img className={styles.asset21} alt="" src="/asset-2-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
