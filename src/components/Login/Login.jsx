import Down from "../../assets/Down.svg";

import styles from "./login.module.css";

export const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <span className={styles.signUp}>회원가입 | </span>
      <span className={styles.login}> 로그인 | </span>
      <span className={styles.customerCenter}>
        고객센터
        <img src={Down} alt="" />
      </span>
    </div>
  );
};
