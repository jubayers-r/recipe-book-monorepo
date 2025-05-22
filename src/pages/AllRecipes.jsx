import React from 'react';
import RecipeCard from '../components/RecipeCard';
import { useLoaderData } from 'react-router';

const AllRecipes = () => {
    const recipesData = useLoaderData();
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {recipesData.map(recipe => <RecipeCard key={recipe._id} recipe ={recipe}/>)}
        </div>
    );
};

export default AllRecipes;