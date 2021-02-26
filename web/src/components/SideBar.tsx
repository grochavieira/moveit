import styles from "../styles/components/SideBar.module.css";
import { ToogleTheme } from "../components/ToogleTheme";

export function SideBar() {
  return (
    <div className={styles.container}>
      <img src="/logo-sidebar.svg" alt="MoveIt" />

      <ToogleTheme />
    </div>
  );
}
