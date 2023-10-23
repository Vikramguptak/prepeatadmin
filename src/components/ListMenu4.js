import styles from "./ListMenu4.module.css";

const ListMenu4 = () => {
  return (
    <div className={styles.listMenu}>
      <div className={styles.content}>
        <img className={styles.homeIcon} alt="" src="/home1.svg" />
        <div className={styles.text}>Dashboard</div>
      </div>
    </div>
  );
};

export default ListMenu4;
