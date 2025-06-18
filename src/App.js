
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NotesList } from './components/NotesList';
import { TopContent } from './components/TopContent';
import { MealDetail } from './components/MealDetail';
import React, { useState, useEffect, use } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';


export default function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (searchTerm === "" || searchTerm) {
      fetchMeals();
    }
  }, [searchTerm]);
  const handleSearch = (term) => {
    setSearchTerm(term.target.value);
  };
  const handleMealClick = (id) => {
    navigate('/meal/${id}');
  }
  return (

    <div className='App'>
      <header className="App-header">
        <h1 className="App-title">Meal</h1>
        <input
          type="text"
          placeholder="Search for a meal..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </header>

      <div className="meal-container">
        {loading && <p>Loading...</p>}
        {error && <p className='error-message'>Error: {error}</p>}
        {!loading && !error && meals.length === 0 && (
          <p>No meals found for "{searchTerm}". Try a different search.</p>
        )}
        <div className="meal-grid">
          {!loading && !error && meals.map((meal) => (
            <div key={meal.idMeal} className="meal-card" onClick={() => handleMealClick(meal.idMeal)}>
              <Link to={`/meal/${meal.idMeal}`} >
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
              </Link>
              <p>Category:{meal.strCategory}</p>
              <p>Area:{meal.strArea}</p>
              <MealDetail id={meal.idMeal} />
            </div>
          ))}
        </div>
        {/* <NotesList /> */}
        {/* <Footer></Footer> */}
      </div>
    </div>
  );
}