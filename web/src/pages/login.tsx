import styles from "../styles/pages/Login.module.css";
import LoginInput from "../components/LoginInput";
export default function Login() {
  return (
    <>
      <img
        className={styles.backgroundLogo}
        src="Simbolo.svg"
        alt="big-logo-login"
      />
      <div className={styles.container}>
        <section>
          <div className={styles.loginContainer}>
            <img
              className={styles.logoLogin}
              src="logo_login.svg"
              alt="logo-login"
            />
            <h2>Bem-vindo</h2>
            <div>
              <img src="github_logo.svg" alt="github-logo" />
              <p>
                Faça login com seu Github <br /> para começar
              </p>
            </div>
            <LoginInput />
          </div>
        </section>
      </div>
    </>
  );
}
