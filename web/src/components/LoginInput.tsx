import { FiArrowRight } from "react-icons/fi";
import styles from "../styles/components/LoginInput.module.css";

export default function LoginInput() {
  return (
    <div className={styles.container}>
      <input placeholder="Digite seu username" type="text" />

      <button>
        <FiArrowRight size={36} color="#fff" />
      </button>
    </div>
  );
}
