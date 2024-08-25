"use client";
import { changeTheme } from "@/utils/theme";

const ThemeSwitcher = () => {
  return (
    <button
      onClick={() => changeTheme("theme1")} //TODO: update logic as per need
      className="rounded bg-gray-200 px-4 py-2"
    >
      Switch theme
    </button>
  );
};

export default ThemeSwitcher;
