// src/utils/pathUtils.js
import { routesData } from '../data/routesData.jsx';

export function getPathByName(id) {
    const route = routesData.find((route) => route.id === id);
    return route ? route.path : '/';
}
