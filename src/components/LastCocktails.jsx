import { Link } from 'react-router-dom';
import CocktailList from './CocktailList';

const styles = {
    section: {
        display: 'flex',
        padding: '24px',
        margin: '64px 0',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    link: {
        marginBottom: '48px',
        textAlign: 'center',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: 'white', // Texte blanc
      textShadow: '2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000', // Contour noir
      marginBottom: '20px',
      letterSpacing: '1px',
    },

    loadingText: {
        fontSize: '32px',
        fontWeight: 'bold',
        paddingBottom: '48px',
        textAlign: 'center',
    },
};

const LastCocktails = ({ cocktailsProp, cocktailsAmountProp }) => {
    const lastCocktails = cocktailsProp.slice(-cocktailsAmountProp);

    return (
        <section style={styles.section}>
          <Link to="/cocktails" style={styles.link}>
            <h2 style={styles.title}>Les {cocktailsAmountProp} derniers cocktails</h2>
          </Link>
    
          {lastCocktails.map((cocktail) => (
            <CocktailList
              cocktailIdProp={cocktail.idDrink}
              cocktailNameProp={cocktail.strDrink}
              cocktailInstructionsProp={cocktail.strInstructions}
              cocktailThumbProp={cocktail.strDrinkThumb}
              key={cocktail.idDrink}
            />
          ))}
        </section>
      );
    };
    
    export default LastCocktails;
