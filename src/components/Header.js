import { useEffect } from "react";
import { useState } from "react";
import Logo from "../assets/logo.png"

export const Header = () => {
  const [theme,setTheme] =useState(JSON.parse(localStorage.getItem("theme")) || "medium");

  useEffect(() =>{
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <header>
    <div className="logo"> {/*Header iki kısma bölündü*/}
        <img src={Logo} alt="Taskmate Logo" />{/*image ve header adı*/}
        <span>TaskMate</span>
    </div>
    <div className="themeSelector">{/*Header'ın ikinci kısmı*/}
        <span onClick={() => setTheme("light")} className={theme ==="light" ? "light activeTheme" : "light"}></span>
        <span onClick={() => setTheme("medium")} className={theme ==="medium" ? "medium activeTheme" : "medium"}></span>
        <span onClick={() => setTheme("dark")} className={theme ==="dark" ? "dark activeTheme" : "dark"}></span>
        <span onClick={() => setTheme("gOne")} className={theme ==="gOne" ? "gOne activeTheme" : "gOne"}></span>
        <span onClick={() => setTheme("gTwo")} className={theme ==="gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
        <span onClick={() => setTheme("gThree")} className={theme ==="gThree" ? "gThree activeTheme" : "gThree"}></span>

    </div>
    </header>
  )
}
