import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.addNewStaff}>Add New Staff</div>
      <div className={styles.discardWrapper}>
        <div className={styles.discard}>Discard</div>
      </div>
      <div className={styles.button}>
        <div className={styles.addStaff}>Add Staff</div>
      </div>
      <div className={styles.staffNameParent}>
        <div className={styles.staffName}>Staff Name</div>
        <div className={styles.input}>
          <div className={styles.content}>
            <div className={styles.text}>Staff Name</div>
          </div>
        </div>
      </div>
      <div className={styles.emailUsernameWrapper}>
        <div className={styles.staffName}>Email / Username</div>
      </div>
      <div className={styles.passwordParent}>
        <div className={styles.staffName}>Password</div>
        <div className={styles.input1}>
          <div className={styles.content}>
            <div className={styles.text}>Password</div>
          </div>
        </div>
      </div>
      <div className={styles.mobileNoParent}>
        <div className={styles.staffName}>Mobile No.</div>
        <div className={styles.input2}>
          <div className={styles.content}>
            <div className={styles.text}>Mobile Number</div>
          </div>
        </div>
      </div>
      <div className={styles.roleParent}>
        <div className={styles.staffName}>Role</div>
        <div className={styles.input2}>
          <div className={styles.content}>
            <div className={styles.text}>Enter Role</div>
          </div>
        </div>
      </div>
      <div className={styles.serviceParent}>
        <div className={styles.staffName}>Service</div>
        <div className={styles.input4}>
          <div className={styles.content}>
            <div className={styles.text}>Enter Service</div>
          </div>
        </div>
      </div>
      <div className={styles.notifyOnThe}>Notify on the date of delivery</div>
      <img className={styles.checkSquareIcon} alt="" src="/checksquare.svg" />
      <div className={styles.input5}>
        <div className={styles.content}>
          <div className={styles.text}>Email / Username</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
