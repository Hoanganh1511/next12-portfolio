import React, { useState, useEffect } from "react";

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-schema: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light";
        setMode(check);
        console.log(check);
        if (check === "dark") {
          console.log("add dark");
          document.documentElement.classList.add("dark");
        } else {
          console.log("remove dark");
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        console.log(check);
        if (check === "dark") {
          console.log("add dark");
          document.documentElement.classList.add("dark");
        } else {
          console.log("remove dark");
          document.documentElement.classList.remove("dark");
        }
      }
    };
    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
      console.log("vao day roi");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
