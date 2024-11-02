// AppGallery.jsx
import React from 'react';
import { getPathByName } from "../../../../utils/getPathByName.jsx";
import LinkButton from "../../../../Components/UI/LinkButton.jsx";
import { routesData } from '../../../../data/routesData.jsx';

export default function AppGallery() {
    const appRoutes = routesData.filter(route => route.id.startsWith('app'));

    return (
        <>
            <h2>Choose Application</h2>
            <div className='flex'>
                {appRoutes.map((app) => (
                    <div className='max-w-96 mx-8' key={app.id}>
                        <LinkButton
                            to={getPathByName(app.id)}
                            variant='appGallery'
                        >
                            {app.name}
                        </LinkButton>
                        <p>{app.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
