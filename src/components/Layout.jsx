import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.css";

export function Layout({ children }) {
    return (
        <div className={styles.layoutContainer}>
            <Header />
            <main className={styles.mainContent}>
                {children}
            </main>
            <Footer />
        </div>
    );
}