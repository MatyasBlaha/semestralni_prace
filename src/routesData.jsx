import React from 'react';

const Root = React.lazy(() => import('./routes/root.jsx'));
const ErrorPage = React.lazy(() => import('./error-page.jsx'));

const ChangeUsernamePage = React.lazy(() => import('./pages/Profile.jsx'))

const Recipes = React.lazy(() => import('./pages/apps/recipes/Recipes.jsx'))

// Utility function to wrap components in Suspense
export const lazyLoad = (Component) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Component />
    </React.Suspense>
);

export const routesData = [
    {
        path: '/',
        element: lazyLoad(Root),
        errorElement: lazyLoad(ErrorPage),
    },
    {
        path: '*',
        element: lazyLoad(ErrorPage),
    },
    {
        name: 'Profile',
      path: '/profile',
      element: lazyLoad(ChangeUsernamePage),
    },
    {
        path: '/app/recipes',
        element: lazyLoad(Recipes)
    }
];