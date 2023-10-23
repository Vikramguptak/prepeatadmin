import RaiseRequestFormContainer from "./RaiseRequestFormContainer";
import styles from "./FeatureFilterContainer.module.css";

const FeatureFilterContainer = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.glasssetParent}>
        <div className={styles.glassset} />
        <b className={styles.whichFeatureDo}>Which Feature do you want?</b>
        <div className={styles.groupWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.featureName}>Feature Name</div>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupItem} />
              <div className={styles.description}>Description</div>
            </div>
          </div>
        </div>
        <RaiseRequestFormContainer actionButtonText="Raise Request" />
        <img className={styles.groupInner} alt="" src="/vector-22.svg" />
      </div>
      <img className={styles.groupIcon} alt="" src="/group.svg" />
      <img className={styles.groupIcon1} alt="" src="/group.svg" />
    </div>
  );
};

export default FeatureFilterContainer;
