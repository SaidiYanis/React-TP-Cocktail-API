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
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const CocktailsCategoryPage = () => {
  const { category } = useParams();
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`);
        const data = await response.json();
        setCocktails(data.drinks);
      } catch (error) {
        console.error('Error fetching data:', error);
        setCocktails(null);
      }
    })();
  }, [category]);

  return (
    <>
      <Header />

      <div style={containerStyle}>
        <h2 style={titleStyle}>Cocktails in the category: {category}</h2>
        {cocktails ? (
          cocktails.length > 0 ? (
            cocktails.map((cocktail) => (
              <CocktailList
                cocktailIdProp={cocktail.idDrink}
                cocktailNameProp={cocktail.strDrink}
                cocktailThumbProp={cocktail.strDrinkThumb}
                key={cocktail.idDrink}
              />
            ))
          ) : (
            <h2 style={titleStyle}>No cocktails found in this category.</h2>
          )
        ) : (
          <h2 style={titleStyle}>Loading...</h2>
        )}
      </div>

      <Footer />
    </>
  );
};

export default CocktailsCategoryPage;
