import styles from "../styles/pages/Login.module.css";
import { FiArrowRight } from "react-icons/fi";
import { signIn, useSession } from "next-auth/client";
import Redirect from "../components/Redirect";

export default function Login() {
  const [session] = useSession();

  if (session) {
    return <Redirect to="/" />;
  }

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
            <button
              onClick={() => signIn("github")}
              className={styles.githubLogin}
            >
              <span>Logar com Github</span>
              <div>
                <FiArrowRight size={36} color="#fff" />
              </div>
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
