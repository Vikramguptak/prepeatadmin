import SummaryContainer from "./SummaryContainer";
import styles from "./SalesOverviewContainer1.module.css";

const SalesOverviewContainer1 = () => {
  return (
    <div className={styles.salesOverview}>
      <div className={styles.summary}> Summary:</div>
      <SummaryContainer
        dimensionLabel="/quantity.svg"
        numericValue="2300"
        metricLabel="Total Users"
      />
      <SummaryContainer
        dimensionLabel="/on-the-way.svg"
        numericValue="277272"
        metricLabel="Total Sales"
        propLeft="251px"
        propTop="66px"
      />
      <div className={styles.salesOverviewChild} />
    </div>
  );
};

export default SalesOverviewContainer1;
