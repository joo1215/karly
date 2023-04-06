import hamburger from "../../assets/hamburger.svg";
import styles from "./nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.categoryListWrapper}>
          <ul className={styles.categoryList}>
            <li>
              <button>
                <img
                  style={{ paddingRight: "10px" }}
                  src={hamburger}
                  alt="카테고리 아이콘"
                />
                카테고리
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.navListWrapper}>
          <ul className={styles.navList}>
            <li>
              <button type="button">신상품</button>
            </li>
            <li>
              <button type="button">베스트</button>
            </li>
            <li>
              <button type="button">알뜰쇼핑</button>
            </li>
            <li>
              <button type="button">특가/혜택</button>
            </li>
          </ul>
        </div>

        <div className={styles.listButton}>
          <button type="button">
            <span style={{ color: "var(--primary)" }}>샛별&middot;낮 </span>
            <span>배송안내</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
