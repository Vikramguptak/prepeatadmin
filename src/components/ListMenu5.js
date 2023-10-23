import styles from "./ListMenu5.module.css";

const ListMenu5 = () => {
  return (
    <div className={styles.listMenu}>
      <div className={styles.content}>
        <img className={styles.homeIcon} alt="" src="/home1.svg" />
        <div className={styles.text}>Dashboard</div>
      </div>
    </div>
  );
};

export default ListMenu5;
