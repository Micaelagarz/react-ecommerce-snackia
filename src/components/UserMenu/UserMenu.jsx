import styles from "./UserMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const UserMenu = () => {
  const { user, loading, logout } = useAuth();
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
      console.error("Unable to log out:", error);
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
        <div className={styles.userLabelSlot}>
          {loading ? (
            <span className={styles.miniLoader}></span>
          ) : (
            <p className={styles.userText}>
              {user?.rol === "admin" ? "Admin" : "My account"}
            </p>
          )}
        </div>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`${styles.iconAngle} ${isOpen ? styles.rotate : ""}`}
        />
      </button>

      <div className={`${styles.dropdownWrapper} ${isOpen ? styles.open : ""}`}>
        <div className={styles.dropDownClip}>
          <div className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}>
            {loading ? (
              <div className={styles.loaderContainer}>
                <div className={styles.loader}></div>
              </div>
            ) : !user ? (
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
                <Link
                  to="/profile"
                  className={styles.dropdownItem}
                  onClick={() => setIsOpen(false)}
                >
                  My Profile
                </Link>
                {user.rol === "admin" ? (
                  <Link
                    to="/management"
                    className={styles.dropdownItem}
                    onClick={() => setIsOpen(false)}
                  >
                    Product management
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/mis-compras"
                      className={styles.dropdownItem}
                      onClick={() => setIsOpen(false)}
                    >
                      My purchases
                    </Link>
                    <Link
                      to="/favorites"
                      className={styles.dropdownItem}
                      onClick={() => setIsOpen(false)}
                    >
                      Favorites
                    </Link>
                  </>
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
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
