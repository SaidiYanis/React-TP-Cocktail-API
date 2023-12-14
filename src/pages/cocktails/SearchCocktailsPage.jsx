import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CocktailCard from '../../components/CocktailList';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
  marginTop: '2rem',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '1rem',
  textAlign: 'center',
};

const SearchCocktailsPage = () => {
  const { name } = useParams();
  const sanitizedSearch = name.replace("§", "/");
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    (async () => {
      const cocktailsResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${sanitizedSearch}`);

      try {
        const cocktailsResponseData = await cocktailsResponse.json();
        setCocktails(cocktailsResponseData);
      } catch (error) {
        setCocktails({ "drinks": null });
        console.log(error);
      }

    })();
  }, [sanitizedSearch]);

  return (
    <>
      <Header />

      <section style={containerStyle}>
        {cocktails ? (
          <>
            {cocktails["drinks"] ? (
              <>
                <h2 style={titleStyle}>Résultats de recherche pour "{sanitizedSearch}"</h2>

                {cocktails["drinks"].map((cocktail) => (
                  <CocktailCard
                    cocktailIdProp={cocktail.idDrink}
                    cocktailNameProp={cocktail.strDrink}
                    cocktailInstructionsProp={cocktail.strInstructions}
                    cocktailThumbProp={cocktail.strDrinkThumb}
                    key={cocktail.idDrink}
                  />
                ))}

              </>
            ) : (
              <h2 style={titleStyle}>Aucun cocktail n'a été trouvé</h2>
            )}
          </>
        ) : (
          <h2 style={titleStyle}>Chargement des cocktails...</h2>
        )}
      </section>

      <Footer />
    </>
  );

}

export default SearchCocktailsPage;
