import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        marginTop: '2rem',
        backgroundColor: '#f6f6f6', // Couleur de fond légèrement grise
    },
    title: {
        fontSize: '36px', // Augmentation de la taille du titre
        fontWeight: 'bold',
        marginBottom: '1rem',
        textAlign: 'center',
        color: '#333', // Couleur du texte assombrie
    },
    categoryLink: {
        display: 'flex',
        alignItems: 'center',
        width: '80%', // Augmentation de la largeur
        padding: '1.5rem', // Réduction de la marge intérieure
        marginBottom: '1.5rem',
        backgroundColor: 'white', // Couleur de fond blanche pour les boutons
        border: '2px solid #ffb6c1', // Bordure rose pastel
        borderRadius: '12px', // Coins arrondis
        textDecoration: 'none',
        color: '#333', // Couleur du texte assombrie
        transition: 'transform 0.2s, background-color 0.2s, border-color 0.2s', // Animation au survol
    },
    categoryLinkHover: {
        transform: 'scale(1.02)', // Légère agrandissement au survol
        backgroundColor: '#ffb6c1', // Changement de couleur au survol
        borderColor: 'red', // Bordure rouge au survol
    },
    categoryName: {
        fontSize: '24px', // Légère augmentation de la taille
        fontWeight: 'bold',
        paddingLeft: '1rem', // Ajout d'un espace à gauche
    },
};

const CategoriesPages = () => {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        (async () => {
            const categoriesResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
            const categoriesData = await categoriesResponse.json();
            setCategories(categoriesData.drinks);
        })();
    }, []);

    return (
        <>
            <Header />

            <div style={styles.container}>
                {categories ? (
                    <>
                        <h2 style={styles.title}>Explorez nos catégories</h2>
                        {categories.map((drink, index) => (
                            <Link
                                to={`/categories/${drink.strCategory.replaceAll('/', '§')}`}
                                key={index}
                                style={styles.categoryLink}
                            >
                                <span role="img" aria-label="Category Icon" style={{ fontSize: '32px' }}>🍹</span>
                                <h3 style={styles.categoryName}>{drink.strCategory}</h3>
                            </Link>
                        ))}
                    </>
                ) : null}
            </div>

            <Footer />
        </>
    );
};

export default CategoriesPages;
