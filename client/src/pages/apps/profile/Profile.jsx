import Navbar from "../../../Components/Navbar.jsx"
import SetChangeName from "./Components/SetChangeName.jsx";
import {usePageTitle} from "../../../hooks/usePageTitle.jsx";

export default function Profile(){
    usePageTitle('navProfile')

    return(
        <>
            <Navbar />
            <h1>Profile</h1>
            <div>
                <p>Change name</p>
                <SetChangeName/>
            </div>
        </>
    )
}