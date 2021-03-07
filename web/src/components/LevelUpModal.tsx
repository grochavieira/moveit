import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { FaTwitter } from "react-icons/fa";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  let url = "https://miro.medium.com/max/2400/1*64NTf9Mlc0ZtIt5ztb8R4g.png";

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        {/* <button
          className={styles.twitterButton}
          type="button"
          onClick={() => {}}
        >
          Compartilhar no Twitter <FaTwitter color="#2AA9E0" size={24} />
        </button> */}

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
}
