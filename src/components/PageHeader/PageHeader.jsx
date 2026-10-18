import styles from './PageHeader.module.css';

const PageHeader = ({ title }) => {
    return (
        <div className={styles.headerContainer}>
            <h2>{title}</h2>
        </div>
    );
}

export default PageHeader;

