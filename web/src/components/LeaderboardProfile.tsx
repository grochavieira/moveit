import { useEffect, useState } from "react";
import styles from "../styles/components/LeaderboardProfile.module.css";

export interface User {
  _id: string;
  userId: string;
  name: string;
  image: string;
  challengesCompleted: number;
  level: number;
  currentExperience: number;
  totalExperience: number;
  // registeredAt: Date;
}

interface LeaderboardProfileProps {
  user: User;
  rank: number;
}

export function LeaderboardProfile({ user, rank }: LeaderboardProfileProps) {
  const [isMobileSize, setIsMobileSize] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 550) {
      setIsMobileSize(true);
    }
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.number}>{rank}</div>
        <div className={styles.userInfo}>
          <div className={styles.userProfile}>
            <img src={user.image} alt={user.name} />
            <div>
              <strong>{user.name}</strong>
              <p>
                <img src="icons/level.svg" alt="Level" /> Level {user.level}
              </p>
            </div>
          </div>

          <div className={styles.userData}>
            <p>
              <span>{user.challengesCompleted}</span>
              {isMobileSize ? " comp." : " completados"}
            </p>

            <p>
              <span>{user.totalExperience}</span>xp
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
