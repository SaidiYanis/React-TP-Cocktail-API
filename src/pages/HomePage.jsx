import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LastCocktails from '../components/LastCocktails';
import RandomCategory from '../components/RandomCategory';
import React from 'react';
import { Link } from 'react-router-dom';
import { run_game } from '../pygame.py';


// Importe ton composant PygameComponent
import PygameComponent from '../components/BrythonComponent'; // Assure-toi de spécifier le chemin correct

const styles = {
  container: {
    display: 'flex',
    padding: '24px',
    margin: '64px 0',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
    border: '7px solid #000',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    paddingBottom: '48px',
    textAlign: 'center',
    color: 'white',
    textShadow: '2px 2px 4px #000000',
    fontFamily: 'Arial, sans-serif',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    margin: '20px 0',
  },
};

const HomePage = () => {
  const [cocktails, setCocktails] = useState(null);

  useEffect(() => {
    (async () => {
      const cocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const cocktailsResponseData = await cocktailsResponse.json();
      setCocktails(cocktailsResponseData["drinks"]);
    })();
  }, []);

  return (
    <>
      <Header />
      <div style={styles.container}>
        <h2 style={styles.title}>COCKTAIL DB</h2>

        {cocktails && (
          <LastCocktails cocktailsProp={cocktails} cocktailsAmountProp={4} />
        )}

        <RandomCategory />

        {/* Ajoute ton composant Pygame ici */}
        <PygameComponent />
        <script type="text/javascript" src="../pygame.py"></script>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
