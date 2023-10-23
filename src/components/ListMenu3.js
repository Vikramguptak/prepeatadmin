import styles from "./ListMenu3.module.css";

const ListMenu3 = () => {
  return (
    <div className={styles.listMenu}>
      <div className={styles.content}>
        <img className={styles.homeIcon} alt="" src="/home1.svg" />
        <div className={styles.text}>Dashboard</div>
      </div>
    </div>
  );
};

export default ListMenu3;
