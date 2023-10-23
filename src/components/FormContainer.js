import TypehLineValue from "./TypehLineValue";
import TypetimeIntervalNumberOf from "./TypetimeIntervalNumberOf";
import styles from "./FormContainer.module.css";

const FormContainer = () => {
  return (
    <div className={styles.chartGrid}>
      <div className={styles.hLinesValues}>
        <div className={styles.horizontalLine}>
          <div className={styles.leftValue}>150M</div>
          <div className={styles.hLine} />
        </div>
        <div className={styles.horizontalLine}>
          <div className={styles.leftValue}>125M</div>
          <div className={styles.hLine} />
        </div>
        <TypehLineValue
          leftValue="75M"
          typehLineValueAlignItems="center"
          hLineBackgroundColor="#dde3e7"
        />
        <TypehLineValue
          leftValue="50M"
          typehLineValueAlignItems="center"
          hLineBackgroundColor="#dde3e7"
        />
        <TypehLineValue
          leftValue="25M"
          typehLineValueAlignItems="center"
          hLineBackgroundColor="#dde3e7"
        />
        <TypehLineValue
          leftValue="0"
          typehLineValueAlignItems="flex-end"
          hLineBackgroundColor="#c7cfd5"
        />
      </div>
      <TypetimeIntervalNumberOf
        typetimeIntervalNumberOfPadding="0px 0px 0px var(--padding-21xl)"
        typetimeIntervalNumberOfBoxSizing="border-box"
      />
    </div>
  );
};

export default FormContainer;
