import SummaryContainer from "./SummaryContainer";
import styles from "./ProductSummaryContainer.module.css";

const ProductSummaryContainer = () => {
  return (
    <div className={styles.productSummary}>
      <SummaryContainer
        dimensionLabel="/suppliers1.svg"
        numericValue="1000"
        metricLabel="New Clients"
        propLeft="60px"
        propTop="24px"
      />
      <SummaryContainer
        dimensionLabel="/categories.svg"
        numericValue="187"
        metricLabel="New Feedback"
        propLeft="235px"
        propTop="24px"
      />
      <div className={styles.productSummaryChild} />
    </div>
  );
};

export default ProductSummaryContainer;
