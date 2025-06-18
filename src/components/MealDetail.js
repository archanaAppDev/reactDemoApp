import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MealDetail = () => {
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            setLoading(true);
            setError(null);
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setMeal(data.meals ? data.meals[0] : null);
                })
                .catch(error => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }

    }, [id]);

    if (loading)
        return <p>Loading...</p>;
    if (error)
        return <p className='error-message'>Error: {error}</p>;
    if (!meal)
        return <p>No meal found with ID: {id}</p>;


    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== '') {
            ingredients.push(`${measure ? measure + ' ' : ''}${ingredient}`);
        }
    }

    return (
        <div>
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>Ingredients:</h2>
            <ul>
                {ingredients.map((ing, index) => (
                    <li key={index}>{ing}</li>
                ))}
            </ul>

        </div>

    );
}
