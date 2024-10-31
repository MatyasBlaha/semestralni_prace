// src/routes/routesData.js
import React from 'react';

const Root = React.lazy(() => import('../routes/root.jsx'));
const ErrorPage = React.lazy(() => import('../error-page.jsx'));
const ChangeUsernamePage = React.lazy(() => import('../pages/Profile.jsx'));
const Recipes = React.lazy(() => import('../pages/apps/recipes/Recipes.jsx'));
const RecipesDetails = React.lazy(() => import('../pages/apps/recipes/Components/RecipeDetails.jsx'))

// Lazy loading helper function
export const lazyLoad = (Component) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Component />
    </React.Suspense>
);

// Unified routes with names and descriptions
export const routesData = [
    {
        id: 'home',
        name: 'Home',
        path: '/',
        title: 'Home',
        element: lazyLoad(Root),
        description: 'Home page'
    },
    {
        id: 'error',
        name: 'Error',
        title: 'not Found',
        path: '*',
        element: lazyLoad(ErrorPage),
    },

    // START WITH 'nav' TO STORE IT IN NAVBAR MENU
    {
        id: 'navProfile',
        name: 'Profile',
        path: '/profile',
        title: 'Profile',
        element: lazyLoad(ChangeUsernamePage),
        description: 'User profile page'
    },

    // START WITH 'app' TO HAVE IT IN APP ROUTER CHOOSING ROOT APP
    {
        id: 'appRecipes',
        name: 'Recipes',
        path: '/app/recipes',
        title: 'App Recipes',
        element: lazyLoad(Recipes),
        description: 'My first bigger app which I updated with fresh clean code'
    },
    {
      id: 'recipe',
      name: 'Recipes_Recipe',
      path: '/app/recipes/:recipeId',
      title: 'App Recipes_Recipe',
      element: lazyLoad(RecipesDetails),
    },
];
