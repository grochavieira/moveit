import styles from "../styles/components/ToogleTheme.module.css";
import Cookies from "js-cookie";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { useContext, useEffect, useState } from "react";

export function ToogleTheme() {
  const { theme } = useContext(ChallengesContext);
  const [isChecked, setIsChecked] = useState(theme === "light" ? true : false);

  useEffect(() => {
    if (theme !== "") {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, []);

  function handleTheme() {
    const htmlTheme = document.documentElement.getAttribute("data-theme");
    console.log({ htmlTheme });
    console.log({ isChecked });
    if (htmlTheme !== "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsChecked(false);
      Cookies.set("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setIsChecked(true);
      Cookies.set("theme", "light");
    }
  }
  return (
    <div className={styles.container}>
      <input
        checked={isChecked}
        type="checkbox"
        id="switch"
        onChange={handleTheme}
      />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
}
