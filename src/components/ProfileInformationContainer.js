import styles from "./ProfileInformationContainer.module.css";

const ProfileInformationContainer = () => {
  return (
    <div className={styles.profileInformation}>
      <div className={styles.background}>
        <div className={styles.backgroundChild} />
      </div>
      <div className={styles.details}>
        <div className={styles.employedOn22062022Container}>
          <p className={styles.employedOn22062022}>
            <b>{`Employed on: `}</b>
            <span className={styles.span}>
              <span className={styles.newDelhiIndia}>22/06/2022</span>
              <span className={styles.span2}>{` `}</span>
            </span>
          </p>
        </div>
        <div className={styles.locationNewDelhiContainer}>
          <b>{`Location: `}</b>
          <span className={styles.newDelhiIndia}>New Delhi, India</span>
        </div>
        <div className={styles.emailIpshitakaurgmailcom}>
          <b>{`Email: `}</b>
          <span className={styles.newDelhiIndia}>Ipshitakaur@gmail.com</span>
        </div>
        <div className={styles.mobile9112345Container}>
          <b>{`Mobile: `}</b>
          <span className={styles.newDelhiIndia}>+91 12345 54321</span>
        </div>
        <div className={styles.fullNameIpshitaContainer}>
          <b>{`Full Name: `}</b>
          <span className={styles.newDelhiIndia}>Ipshita Kaur</span>
        </div>
      </div>
      <div className={styles.text}>
        <img className={styles.textChild} alt="" src="/vector-6.svg" />
        <div className={styles.hiImIpshita}>
          Hi, I’m Ipshita Kaur, Senior designer here at Ricoz. I’ve been a part
          of this family for more than a year now. I believe one can learn
          something new everyday and that there is no age for learning.
        </div>
        <b className={styles.profileInformation1}>Profile Information</b>
      </div>
    </div>
  );
};

export default ProfileInformationContainer;
