import styles from "../styles/components/ToogleTheme.module.css";
import Cookies from "js-cookie";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { useContext, useEffect, useState } from "react";

export function ToogleTheme() {
  const theme = Cookies.get("theme");

  useEffect(() => {
    if (theme) document.documentElement.setAttribute("data-theme", theme);
  }, []);

  function handleTheme() {
    const htmlTheme = document.documentElement.getAttribute("data-theme");

    console.log({ htmlTheme });
    if (htmlTheme !== "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      Cookies.set("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      Cookies.set("theme", "light");
    }
  }
  return (
    <div className={styles.container}>
      <input type="checkbox" id="switch" onChange={handleTheme} />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
}
