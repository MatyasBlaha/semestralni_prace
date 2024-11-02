import { useContext } from "react";
import {UserContext} from "../../../../store/user-context.jsx";

import SetUsername from "./SetUsername.jsx";

export default function Header(){
    const {user} = useContext(UserContext);


    return(
        <div className='flex flex-col justify-center items-center my-8'>
           <h1 className='text-4xl'>Welcome, {user.username}</h1>
            <SetUsername />
        </div>
    )
}