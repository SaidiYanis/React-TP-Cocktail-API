import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const cocktailsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '20px',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
};

const CocktailsByIngredientPage = () => {
  const { ingredient } = useParams();
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`);
        const data = await response.json();
        setCocktails(data.drinks);
      } catch (error) {
        console.error('Error fetching data:', error);
        setCocktails([]);
      }
    })();
  }, [ingredient]);

  return (
    <>
      <Header />

      <div style={containerStyle}>
        <h2 style={titleStyle}>Cocktails avec l'ingrédient {ingredient}</h2>
        {cocktails && cocktails.length > 0 ? (
          <div style={cocktailsGridStyle}>
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
          <h2 style={titleStyle}>Aucun cocktail trouvé pour cet ingrédient.</h2>
        )}
      </div>

      <Footer />
    </>
  );
};

export default CocktailsByIngredientPage;
