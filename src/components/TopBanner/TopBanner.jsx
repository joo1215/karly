import React, { useState, useRef } from "react";
import styles from "./topBanner.module.css";
import close from "../../assets/ic-close.svg";

//상태 왜써? => 상태를변경해줄라고쓰지
//상태는 어디에쓰여? => 이벤트
//

// 버튼을누르면 상태가변해 -1 클리어
// 그럼 그 상태가 되면 최상단 배너가 사라져 -2

// 1-10 보따리
// 하나하나 개념들을 설명하는방식  =>  연주가 PTSD
// 무언가를 만들면서 파생되는 개념들을 학습
// => 정말 뜬금없이 state 했다가 effect했다가, forwardRef, 고차컴포넌트 , .... ,컴포넌트 합성 ,.....
// => 광범위한 키워드들이 나옴 , 그건 너가 잘 정리해야 돼.
// useState와 onClick을 어떻게 사용하는지...? 연관되게...?

export const TopBanner = () => {
  const [closeState, setCloseState] = useState(true);

  console.log(closeState);

  const closeButtonHandler = () => {
    setCloseState(!closeState);
  };
  return (
    <div
      className={styles.topBannerContainer}
      style={{ display: !closeState ? "none" : "flex" }}
      // style={{ display: closeState ? "flex" : "none" }}
    >
      <div className={styles.topBanner}>
        <span className={styles.topBannerText}>
          지금 가입하고 인기상품
          <span style={{ fontWeight: "600" }}>100원</span>에 받아가세요!
        </span>
        <button
          className={styles.topBannerButton}
          type="button"
          onClick={() => {
            closeButtonHandler();
          }}
        >
          <img
            src={close}
            alt={"최상단배너 닫기버튼"}
            className={styles.close}
          />
        </button>
      </div>
    </div>
  );
};
//svg
//경로
//변수로

// //명령형 프로그래밍
// function 연주() {
//   return 연주라는함수가이렇게있어요;
// }

// //조건문
// if (연주 != 사람) {
//   console.log("아임몬스터");
// } else console.log("나도사람이라구");

// //선언형 프로그래밍  =
// const 연주 = () => {
//   return 연주라는함수가이렇게있어요;
// };

// //삼항연산자 = 선언형
// 연주 === 이쁘다 ? console.log("이쁘긴개뿔") : console.log("연주는못난이");
