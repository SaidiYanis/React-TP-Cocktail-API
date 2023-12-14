import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CocktailList from '../components/CocktailList';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    marginTop: '2rem',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexGrow: 1, // Ajouté pour étendre le conteneur
    minHeight: 'calc(100vh - 4rem)', // Hauteur minimale pour occuper l'espace entre le header et le footer
  };
const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: 'black', // Ajout de la couleur blanche
};

const cocktailsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Deux colonnes par défaut
    gap: '20px',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '15px',
    '@media (max-width: 600px)': { // Media query pour les petits écrans
      gridTemplateColumns: '1fr', // Une seule colonne sur les petits écrans
    },
};    

const CocktailGlassPage = () => {
  const { glass } = useParams();
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${encodeURIComponent(glass)}`);
        const data = await response.json();
        setCocktails(data.drinks);
      } catch (error) {
        console.error('Error fetching data:', error);
        setCocktails(null);
      }
    })();
  }, [glass]);

  return (
    <>
      <Header />

      <div style={containerStyle}>
        <h2 style={titleStyle}>Cocktails in {glass}</h2>
        {cocktails && cocktails.length > 0 ? (
          <div style={cocktailsContainerStyle}>
            {cocktails.map((cocktail) => (
              <CocktailList
                cocktailIdProp={cocktail.idDrink}
                cocktailNameProp={cocktail.strDrink}
                cocktailThumbProp={cocktail.strDrinkThumb}
                key={cocktail.idDrink}
                />
                ))}
              </div>
            ) : (
              cocktails === null && <h2 style={titleStyle}>No cocktails found for this glass type.</h2>
            )}
          </div>
    
          <Footer />
        </>
      );
    };
    
    export default CocktailGlassPage;
