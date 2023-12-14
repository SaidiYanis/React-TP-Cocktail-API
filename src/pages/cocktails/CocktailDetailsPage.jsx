import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
  marginTop: '2rem',
};

const cardStyle = {
  width: '90%',
  maxWidth: '800px',
  padding: '1rem',
  borderRadius: '12px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Ajoute une ombre
  backgroundColor: '#fff',
};

const titleStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '1rem',
  textAlign: 'center',
  color: '#333',
};

const imageContainerStyle = {
  width: '100%',
  height: '300px',
  overflow: 'hidden',
  borderRadius: '12px',
  marginBottom: '1rem',
  border: '4px solid #000', // Ajoute un contour noir
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '12px',
  transition: 'transform 0.5s ease-in-out',
};

const categoryLinkStyle = {
  textDecoration: 'none',
  color: '#FFB6C1',
  fontWeight: 'bold',
};

const ingredientsListStyle = {
  listStyleType: 'disc',
  padding: '0',
  textAlign: 'left',
};

const backButtonStyle = {
  paddingTop: '1rem',
  fontWeight: 'bold',
  color: '#FFB6C1',
};

const CocktailDetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    (async () => {
      const cocktailsResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

      try {
        const cocktailsResponseData = await cocktailsResponse.json();
        setDetails(cocktailsResponseData);
      } catch (error) {
        setDetails({ "drinks": null });
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <>
      <Header />

      <div style={containerStyle}>
        {details ? (
          <>
            {details["drinks"] ? (
              <div style={cardStyle}>
                <h1 style={titleStyle}>{details["drinks"][0].strDrink}</h1>

                <div style={imageContainerStyle}>
                  <img
                    src={details["drinks"][0].strDrinkThumb}
                    alt={details["drinks"][0].strDrink}
                    style={imageStyle}
                  />
                </div>

                <p><strong>Catégorie:</strong> <Link to={`/categories/${details["drinks"][0].strCategory}`} style={categoryLinkStyle}>{details["drinks"][0].strCategory}</Link></p>
                <p><strong>Ingrédients:</strong></p>

                <ul style={ingredientsListStyle}>
                  {Object.keys(details["drinks"][0]).map((key) => {
                    if (key.includes("strIngredient") && details["drinks"][0][key] !== null) {
                      return (
                        <li key={details["drinks"][0][key]}>
                          <Link to={`/cocktails/ingredient/${details["drinks"][0][key]}`} style={categoryLinkStyle}>
                            {details["drinks"][0][key]}
                          </Link>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>

                <p><strong>Modifié le:</strong> {details["drinks"][0].dateModified}</p>
                <p>{details["drinks"][0].strInstructions}</p>

                <Link to="/cocktails" style={backButtonStyle}>Retour aux cocktails &raquo;</Link>
              </div>
            ) : (
              <h2 style={titleStyle}>Aucun cocktail n'a été trouvé avec cet identifiant</h2>
            )}
          </>
        ) : null}
      </div>

      <Footer />
    </>
  );
};

export default CocktailDetailsPage;
