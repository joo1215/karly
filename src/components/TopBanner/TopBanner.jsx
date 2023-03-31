import React from "react";
import styles from "./topBanner.module.css";
import close from "../../assets/ic-close.svg";

export const TopBanner = () => {
  return (
    <div>
      <div className={styles.topBannerText}>
        <span>지금 가입하고 인기상품 100원에 받아가세요!</span>
        <button className={styles.topBannerButton} type="button">
          <img src={close} alt="" className={styles.close} />
        </button>
      </div>
    </div>
  );
};
//svg
//경로
//변수로
