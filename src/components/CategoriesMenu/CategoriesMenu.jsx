import styles from "./CategoriesMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { id: "nutsAndSeeds", label: "Nuts y seeds" },
  { id: "glutenFreeSnacks", label: "Gluten-free snacks" },
  { id: "spreads", label: "Spreads" },
  { id: "oils", label: "Oils" },
  { id: "wholeFoods", label: "Whole foods" },
  { id: "grainsAndCereals", label: "Grains and cereals" },
  { id: "organicProducts", label: "Organic products" },
  { id: "infusions", label: "Infusions" },
];

const CategoriesMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.CategoriesMenu}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={styles.trigger}>
        <span>Categories</span>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`${styles.iconAngle} ${isOpen ? styles.rotate : ""}`}
        />
      </div>

     <div className={styles.dropDownWrapper}>
        <div className={styles.dropDownClip}>
          <ul className={`${styles.dropDownList} ${isOpen ? styles.open : ""}`}>
            {CATEGORIES.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/category/${category.id}`}
                  className={styles.category}
                  onClick={() => setIsOpen(false)}
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoriesMenu;
