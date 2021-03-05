import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level, profilePicture, name } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src={profilePicture} alt={name} />
      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" /> Level {level}
        </p>
      </div>
    </div>
  );
}
