import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PageHeader from "./PageHeader/PageHeader";
import styles from "./Layout.module.css";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const pageTitles = {
    "offers": "Offers",
    "contact": "Contact us",
};

export function Layout({ title, children }) {
    const location = useLocation();
    const currentTitle = pageTitles[location.pathname];

    return (
        <div className={styles.layoutContainer}>
            <Header />
            {currentTitle && <PageHeader title={currentTitle} />}
            <main className={styles.mainContent}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}