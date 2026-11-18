import styles from "./UserMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const UserMenu = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setIsOpen(false);
    } catch (error) {
      console.error("Unable to log in:", error);
    }
  };

  return (
    <div
      className={styles.userMenuContainer}
      ref={menuRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className={styles.navIconUser}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faUser} />
        <p className={styles.userText}>
          {user
            ? user.rol === "admin"
              ? "Admin"
              : "My account"
            : "My account"}
        </p>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`${styles.iconAngle} ${isOpen ? styles.rotate : ""}`}
        />
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {!user ? (
            /* Guest view (not logged in) */
            <div className={styles.guestContent}>
              <p className={styles.dropdownTitle}>Already have an account?</p>
              <Link
                to="/login"
                className={styles.btnPrimary}
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
              <hr className={styles.divider} />
              <p className={styles.registerText}>
                Don't have an account yet?{" "}
                <Link
                  to="/register"
                  className={styles.linkRegister}
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </Link>
              </p>
            </div>
          ) : (
            /* Logged-in view (User or Admin) */
            <div className={styles.loggedContent}>
              <p className={styles.userEmail} title={user.email}>
                {user.email}
              </p>
              <hr className={styles.divider} />
              <Link to="/profile">My Profile</Link>
              {user.rol === "admin" ? (
                <Link
                  to="/management"
                  className={styles.dropdownItem}
                  onClick={() => setIsOpen(false)}
                >
                  Product management
                </Link>
              ) : (
                <Link
                  to="/mis-compras"
                  className={styles.dropdownItem}
                  onClick={() => setIsOpen(false)}
                >
                  My purchases
                </Link>
              )}

              <button
                type="button"
                onClick={handleLogout}
                className={`${styles.dropdownItem} ${styles.logoutBtn}`}
              >
                Log out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
