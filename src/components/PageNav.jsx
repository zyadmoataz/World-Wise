import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
function PageNav() {
  return (
    <>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            {/* navigate to the product in declerative way not as useNavigate hook */}
            <NavLink to='/travel-blog'> Blog</NavLink>
          </li>
          <li>
            <NavLink to='/resources'>Resources</NavLink>
          </li>
          <li>
            <NavLink to='/login' className={styles.ctaLink}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <hr /> */}
    </>
  );
}

export default PageNav;
