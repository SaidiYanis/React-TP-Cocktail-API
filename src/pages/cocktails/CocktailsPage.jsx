import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CocktailList from '../../components/CocktailList';

const CocktailsListPage = () => {
    const [cocktailsList, setCocktailsList] = useState(null);

    useEffect(() => {
        (async () => {
            const cocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
            const cocktailsResponseData = await cocktailsResponse.json();
            setCocktailsList(cocktailsResponseData["drinks"]);
        })();
    }, []);

    return (
        <>
        <Header />

        <section style={centeredColumnStyle}>
            {cocktailsList ? (
                <>
                    {cocktailsList.map((cocktail) => (
                        <CocktailList
                            cocktailIdProp={cocktail.idDrink}
                            cocktailNameProp={cocktail.strDrink}
                            cocktailInstructionsProp={cocktail.strInstructions}
                            cocktailThumbProp={cocktail.strDrinkThumb}
                            key={cocktail.idDrink}
                        />
                    ))}
                </>
            ) : null}
        </section>

        <Footer />
        </>
    );
}

const centeredColumnStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', // Centrer horizontalement
    alignItems: 'center', // Centrer verticalement
    margin: '0 auto', // Centrer la section dans la largeur
    maxWidth: '960px', // Largeur maximale de la colonne centrale
    padding: '16px', // Ajouter un peu d'espace intérieur
};

export default CocktailsListPage;
