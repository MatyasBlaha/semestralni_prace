import { useEffect } from "react";
import {routesData} from "../data/routesData.jsx";

export function usePageTitle(routeId){
    useEffect(() => {
        return () => {
            const route = routesData.find(route => route.id === routeId);
            if(route && route.title){
                document.title = route.title;
            }
        };
    }, [routeId]);

}