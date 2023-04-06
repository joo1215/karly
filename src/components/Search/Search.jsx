import { useState } from "react";

import Logo from "../../assets/Logo.svg";
import New from "../../assets/New.svg";
import Location from "../../assets/Location.svg";
import Heart from "../../assets/Heart.svg";
import Cart from "../../assets/Cart.svg";
import searchIcon from "../../assets/SearchIcon.svg";
import inputIcon from "../../assets/inputIcon.svg";

import styles from "./search.module.css";

export const Search = () => {
  const [textState, setTextState] = useState("");
  // console.log(textState);

  const inputHandler = (e) => {
    e.preventDefault;
    setTextState(e.target.value);
  };

  const [xState, setXState] = useState(false);

  console.log(!xState);

  const inputIconHandler = () => {
    setXState(!xState);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.karlySwitch}>
        <span className={styles.karlyLogo}>
          <img src={Logo} alt="" />
        </span>
        <span className={styles.marketKarlyText}>마켓칼리</span>
        <span className={styles.bar}> | </span>
        <span className={styles.beautyKarlyText}>
          뷰티칼리
          <img className={styles.newIcon} src={New} alt="" />
        </span>
      </div>
      <form className={styles.searchBar}>
        <label htmlFor="search"></label>
        <input
          className={styles.serchBarInput}
          type="text"
          id="search"
          placeholder="검색어를 입력해주세요"
          onChange={(e) => {
            inputHandler(e);
          }}
        />
        <div>
          <button
            style={{ display: textState === "" ? "none" : "block" }}
            className={styles.inputIcon}
            onClick={() => {
              inputIconHandler();
            }}
          >
            <img src={inputIcon} alt="x아이콘" />
          </button>
        </div>
        <div>
          <button className={styles.searchIcon} id="search">
            <img src={searchIcon} alt="검색창 실행 아이콘" />
          </button>
        </div>
      </form>
      <div className={styles.icons}>
        <span>
          <img className={styles.locationIcon} src={Location} alt="" />
        </span>
        <span>
          <img className={styles.heartIcon} src={Heart} alt="" />
        </span>
        <span className={styles.cartIcon}>
          <img src={Cart} alt="" />
        </span>
      </div>
    </div>
  );
};
