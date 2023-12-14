import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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

const ingredientLinkStyle = {
  width: '50%',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  padding: '1rem',
  marginBottom: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const carouselContainerStyle = {
  width: '80%', // Ajuster la largeur du conteneur du carrousel
  maxWidth: '800px', // Largeur maximale du conteneur
  margin: '0 auto', // Centrer horizontalement
};

const IngredientsPages = () => {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    (async () => {
      const ingredientsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      setIngredients(await ingredientsResponse.json());
    })();
  }, []);

  return (
    <>
      <Header />

      <div style={containerStyle}>
        <h2 style={titleStyle}>Les ingrédients</h2>

        {ingredients && (
          <div style={carouselContainerStyle}>
            <Carousel
              showArrows={true}
              showStatus={true}
              showIndicators={false}
            >
              {ingredients["drinks"].map((drink, index) => (
                <Link
                  to={`/ingredients/details/${drink.strIngredient1}`}
                  key={index}
                  style={ingredientLinkStyle}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', paddingBottom: '0.5rem' }}>{drink.strIngredient1}</h3>
                  <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}-Small.png`}
                    alt=""
                    style={{ maxWidth: '100%' }}
                  />
                </Link>
              ))}
            </Carousel>
          </div>
        )}

        {/* Liste de tous les ingrédients */}
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '1rem' }}>Liste de tous les ingrédients :</h3>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            {ingredients && ingredients["drinks"].map((drink, index) => (
              <li key={index}>
                <Link to={`/ingredients/details/${drink.strIngredient1}`} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#333' }}>
                  <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}-Small.png`}
                    alt=""
                    style={{ maxWidth: '30px', marginRight: '10px' }}
                  />
                  {drink.strIngredient1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default IngredientsPages;
