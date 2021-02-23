import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/48029638?s=460&u=f8d11a7aa9ce76a782ef140a075c5c81be878f00&v=4"
        alt="Guilherme Rocha"
      />
      <div>
        <strong>Guilherme Rocha</strong>
        <p>
          <img src="icons/level.svg" alt="Level" /> Level 1
        </p>
      </div>
    </div>
  );
}
