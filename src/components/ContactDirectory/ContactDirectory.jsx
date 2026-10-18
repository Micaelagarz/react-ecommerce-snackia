import Container from "../Container";
import styles from "./ContactDirectory.module.css";
import { useState, useEffect } from "react";
import PageHeader from "../PageHeader/PageHeader";

const ContactDirectory = () => {

    const [us, setUs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/us.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("The team could not be loaded.")
                }
                return response.json();
            })
            .then((data) => {
                setUs(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <h2>Loading the team...</h2>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (


        <Container>
            <PageHeader title="Contact us" />
            <section className={styles.contactDirectoryGrid}>
                {us.map((person) => (
                    <article key={person.id} className={styles.cardContainer}>
                        <div className={styles.photoContactsContainer}>
                            <img className={styles.photoContacts} src={person.photo} alt={person.name} />
                        </div>

                        <div className={styles.infoCardContacts}>
                            <h3>{person.name}</h3>
                            <p>{person.role}</p>
                            <p>{person.email}</p>
                        </div>
                    </article>
                ))}
            </section>
        </Container>


    )
}

export default ContactDirectory;