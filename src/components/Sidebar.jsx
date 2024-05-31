import { useState } from "react";
import { Outlet } from "react-router-dom";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  // const large = true;
  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`${styles.sidebar} ${isExpanded ? styles.expanded : ""}`}>
      <div className={styles.toggleButton} onClick={toggleExpand}>
        {isExpanded ? <HiChevronDown /> : <HiChevronUp />}
      </div>

      {isExpanded || <Logo />}
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          Copyright of Voyage Vistas &copy; {new Date().getFullYear()} by Ziad
          Moataz
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
