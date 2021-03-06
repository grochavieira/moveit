import styles from "../styles/components/SideBar.module.css";
import { ToogleTheme } from "../components/ToogleTheme";
import { signOut } from "next-auth/client";
import { BsHouseDoor } from "react-icons/bs";
import { IoMedalOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import Link from "next/link";

export function SideBar() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <img onClick={() => signOut()} src="/logo-sidebar.svg" alt="MoveIt" />
      <div>
        <div
          className={
            router.pathname === "/"
              ? styles.navContainer
              : styles.navContainerSelected
          }
        >
          <Link href="/">
            <a>
              <BsHouseDoor size={24} />
            </a>
          </Link>
        </div>
        <div
          className={
            router.pathname === "/ranking"
              ? styles.navContainer
              : styles.navContainerSelected
          }
        >
          <Link href="/ranking">
            <a>
              <IoMedalOutline size={24} />
            </a>
          </Link>
        </div>
      </div>
      <ToogleTheme />
    </div>
  );
}
