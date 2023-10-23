import RaiseRequestFormContainer from "./RaiseRequestFormContainer";
import styles from "./ContainerCardForm.module.css";

const ContainerCardForm = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.glasssetParent}>
        <div className={styles.glassset} />
        <div className={styles.div}>#00001</div>
        <b className={styles.raiseAComplaint}>Raise A Complaint</b>
        <div className={styles.groupWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.ticketNumber}>Ticket Number</div>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild} />
              <div className={styles.groupInner} />
              <div className={styles.subject}>Subject</div>
            </div>
            <div className={styles.complaintWrapper}>
              <div className={styles.complaint}>Complaint</div>
            </div>
          </div>
        </div>
        <RaiseRequestFormContainer
          actionButtonText="Raise Complaint"
          propTop="490px"
          propLeft="calc(50% - 251.3px)"
          propHeight="30px"
        />
        <img className={styles.vectorIcon} alt="" src="/vector-22.svg" />
      </div>
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <img className={styles.groupIcon1} alt="" src="/group.svg" />
    </div>
  );
};

export default ContainerCardForm;
