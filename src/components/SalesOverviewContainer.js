import styles from "./SalesOverviewContainer.module.css";

const SalesOverviewContainer = () => {
  return (
    <div className={styles.salesOverview}>
      <div className={styles.salesOverview1}>Sales Overview</div>
      <div className={styles.graph}>
        <div className={styles.data}>
          <div className={styles.horizontal}>
            <b className={styles.dec}>Dec</b>
            <b className={styles.nov}>Nov</b>
            <b className={styles.oct}>Oct</b>
            <b className={styles.sep}>Sep</b>
            <b className={styles.aug}>Aug</b>
            <b className={styles.jul}>Jul</b>
            <b className={styles.jun}>Jun</b>
            <b className={styles.may}>May</b>
            <b className={styles.apr}>Apr</b>
            <b className={styles.mar}>Mar</b>
            <b className={styles.feb}>Feb</b>
            <b className={styles.jan}>Jan</b>
          </div>
          <div className={styles.vertical}>
            <b className={styles.b}>0</b>
            <b className={styles.b1}>100</b>
            <b className={styles.b2}>200</b>
            <b className={styles.b3}>300</b>
            <b className={styles.b4}>400</b>
            <b className={styles.b5}>500</b>
            <img className={styles.linesIcon} alt="" src="/lines.svg" />
          </div>
          <img className={styles.linesIcon1} alt="" src="/lines1.svg" />
        </div>
      </div>
      <div className={styles.months}>Months</div>
      <div className={styles.sales}>Sales</div>
    </div>
  );
};

export default SalesOverviewContainer;
