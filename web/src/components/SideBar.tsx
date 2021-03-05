import styles from "../styles/components/SideBar.module.css";
import { ToogleTheme } from "../components/ToogleTheme";
import { signOut } from "next-auth/client";

export function SideBar() {
  return (
    <div className={styles.container}>
      <img onClick={() => signOut()} src="/logo-sidebar.svg" alt="MoveIt" />

      <ToogleTheme />
    </div>
  );
}
