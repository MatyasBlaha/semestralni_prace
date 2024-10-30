import React, { useContext, useState } from "react";
import { UserContext } from "../store/user-context.jsx";
import LinkButton from './UI/LinkButton';
import {getPathByName} from "../utils/getPathByName.jsx";
import {routesData} from "../data/routesData.jsx";

export default function Navbar() {
    const { user } = useContext(UserContext);
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked((prevIsClicked) => !prevIsClicked);
    }

    const navRoutes = routesData.filter(route => route.id.startsWith('nav'))

    return (
        <div className='w-full flex justify-between bg-gray-200 p-4'>
            <div className='max-w-24'>
                <LinkButton to="/" variant='homeNav'>
                    Home
                </LinkButton>
            </div>

                <button onClick={handleClick} className='flex items-center'>
                    {user.username}
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         width="20px" height="10px" viewBox="0 0 960 560" enableBackground="new 0 0 960 560"
                         xmlSpace="preserve">
                    <g id="Rounded_Rectangle_33_copy_4_1_">
	                <path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937
		                c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937
		                c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
                    </g>
                </svg>
                </button>

            {isClicked && (
                <div className="absolute right-3 mt-11 w-48 bg-white shadow-lg rounded-md">
                    <ul className="py-2">
                        {navRoutes.map((app) => (
                            <li key={app.id} className="px-4 py-2 hover:bg-gray-100">
                                <LinkButton to={getPathByName(app.id)}>
                                    {app.name}
                                </LinkButton>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
