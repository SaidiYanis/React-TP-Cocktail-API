import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const containerStyle = {
  display: 'flex',
  padding: '1rem',
  marginTop: '2rem',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: 'white',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
};

const categoryContainerStyle = {
  width: '60%',
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '1rem',
  marginBottom: '1rem',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  whiteSpace: 'nowrap', // Force le texte à rester sur une ligne
  overflow: 'hidden', // Masque le texte débordant s'il est trop long
  textOverflow: 'ellipsis', // Ajoute des points de suspension en cas de dépassement du conteneur
};

const categoryTitleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  paddingBottom: '0.5rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap', // Force le texte à rester sur une ligne
};

const RandomCategory = () => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    (async () => {
      const categoriesResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const categoriesResponseData = await categoriesResponse.json();

      const randomCategoryIndex = Math.floor(Math.random() * categoriesResponseData.drinks.length);
      const randomCategory = categoriesResponseData.drinks[randomCategoryIndex];

      setCategory(randomCategory);
    })();
  }, []);

  return (
    <section style={containerStyle}>
      <Link to="/categories" style={linkStyle}>
        <h2 style={titleStyle}>Catégorie aléatoire</h2>
      </Link>

      <Link
        to={`/cocktails/category/${category?.strCategory.replaceAll('/', '§')}`}
        style={linkStyle}
      >
        <div style={categoryContainerStyle}>
          <h3 style={categoryTitleStyle}>{category?.strCategory}</h3>
        </div>
      </Link>
    </section>
  );
};

export default RandomCategory;
