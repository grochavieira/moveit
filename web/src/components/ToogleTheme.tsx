import styles from "../styles/components/ToogleTheme.module.css";
import Cookies from "js-cookie";
import { BsSun, BsMoon } from "react-icons/bs";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { useContext, useEffect, useState } from "react";

export function ToogleTheme() {
  const theme = Cookies.get("theme");
  const [dataTheme, setDataTheme] = useState("dark");

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      setDataTheme(theme);
    }
  }, []);

  function handleTheme() {
    const htmlTheme = document.documentElement.getAttribute("data-theme");

    if (htmlTheme !== "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setDataTheme("dark");
      Cookies.set("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setDataTheme("light");
      Cookies.set("theme", "light");
    }
  }
  return (
    <div className={styles.container}>
      <input type="checkbox" id="switch" onChange={handleTheme} />
      <label htmlFor="switch">
        {dataTheme !== "dark" ? (
          <BsSun color="#5965e0" size={28} />
        ) : (
          <BsMoon color="#5965e0" size={28} />
        )}
      </label>
    </div>
  );
}
