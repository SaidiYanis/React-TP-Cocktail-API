import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CocktailDetailsPage from './pages/cocktails/CocktailDetailsPage';
import CocktailsPage from './pages/cocktails/CocktailsPage';
import SearchCocktailsPage from './pages/cocktails/SearchCocktailsPage';
import CategoriesPage from './pages/cocktails/CategoriesPage';
import IngredientsPages from './pages/cocktails/IngredientsPage';
import GlassesPages from './pages/cocktails/GlassesPage';
import CocktailsByIngredientPage from './pages/CocktailsByIngredientPage';
import CocktailGlassPage from './pages/CocktailGlassPage'
import CocktailsCategoryPage from './pages/CocktailsCategoryPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<CocktailsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/ingredients" element={<IngredientsPages />} />
        <Route path="/glasses" element={<GlassesPages />} />
        <Route path="/cocktails/details/:id" element={<CocktailDetailsPage />} />
        <Route path="/cocktails/search/:name" element={<SearchCocktailsPage />} />
        <Route path="/cocktails/search/:name" element={<SearchCocktailsPage />} />
        <Route path="/ingredients/details/:ingredient" element={<CocktailsByIngredientPage />} />
        <Route path="/glasses/:glass" element={<CocktailGlassPage />} />
        <Route path="/categories/:category" element={<CocktailsCategoryPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
