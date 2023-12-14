import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const styles = {
    container: {
        display: 'flex',
        padding: '24px',
        margin: '64px 0',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '40px',
    },
    title: {
        fontSize: '48px',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: '16px',
        background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    linksContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    link: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'calc(50% - 20px)', // Permet deux verres par ligne avec un espace de 20px entre eux
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',
        padding: '32px',
        marginBottom: '24px',
        backgroundColor: 'white',
        transition: 'transform 0.2s ease-in-out', // Ajout d'une transition au survol
        textDecoration: 'none', // Suppression de la décoration du lien
        color: 'inherit', // Utilisation de la couleur par défaut du texte
    },
    glassName: {
        fontSize: '24px',
        fontWeight: 'bold',
        paddingBottom: '16px',
        textAlign: 'center',
    },
};

const GlassesPages = () => {
    const [glasses, setGlasses] = useState(null);

    useEffect(() => {
        (async () => {
            const glassesResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
            setGlasses(await glassesResponse.json());
        })();
    }, []);

    return (
        <>
            <Header />

            <div style={styles.container}>
                <div style={styles.titleContainer}>
                    <h2 style={styles.title}>Nos verres</h2>
                </div>
                <div style={styles.linksContainer}>
                    {glasses && glasses["drinks"].map((drink, index) => (
                        <Link to={`/glasses/${drink.strGlass}`} key={index} style={styles.link}>
                            <span role="img" aria-label="Glass Emoji" style={{ fontSize: '48px', marginBottom: '16px' }}>🍸</span>
                            <h3 style={styles.glassName}>{drink.strGlass}</h3>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default GlassesPages;
