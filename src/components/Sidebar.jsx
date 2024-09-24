import { Outlet } from "react-router-dom";
import AppNav from "./AppNAv";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet/>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Gautham
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
