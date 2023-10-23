import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.pricingChild} />
      <div className={styles.heading}>
        <div className={styles.subscription}>Subscription</div>
        <div className={styles.chooseAPlan}>
          Choose a plan followed to your needs
        </div>
      </div>
      <div className={styles.component6Parent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameParent}>
            <div className={styles.businessTeamParent}>
              <div className={styles.businessTeam}>Health</div>
              <div className={styles.starterPackWrapper}>
                <div className={styles.starterPack}>Revive</div>
              </div>
            </div>
            <b className={styles.month}>₹300</b>
            <div className={styles.displayStarsIn}>
              Improve your health and routine with prepeat
            </div>
          </div>
          <div className={styles.choosePlanWrapper}>
            <div className={styles.choosePlan}>Choose Plan</div>
          </div>
        </div>
        <div className={styles.component7}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.businessTeamParent}>
                <div className={styles.businessTeam}>Welness</div>
                <div className={styles.starterPackContainer}>
                  <div className={styles.starterPack}>Starter Pack</div>
                </div>
              </div>
              <b className={styles.month}>₹700</b>
              <div className={styles.displayStarsIn1}>
                Improve your health and routine with prepeat
              </div>
            </div>
            <div className={styles.choosePlanContainer}>
              <div className={styles.choosePlan}>Choose Plan</div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameParent}>
            <div className={styles.businessTeamParent}>
              <div className={styles.businessTeam}>Combination</div>
              <div className={styles.starterPackWrapper}>
                <div className={styles.starterPack}>Professional Pack</div>
              </div>
            </div>
            <b className={styles.month}>₹1500</b>
            <div className={styles.displayStarsIn}>
              Improve your health and routine with prepeat
            </div>
          </div>
          <div className={styles.choosePlanWrapper}>
            <div className={styles.choosePlan}>Choose Plan</div>
          </div>
        </div>
      </div>
      <div className={styles.chooseThePlan}>
        Choose the plan that’s right for you
      </div>
    </div>
  );
};

export default Pricing;
