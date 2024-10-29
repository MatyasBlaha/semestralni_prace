import Navbar from "../Components/Navbar.jsx"
import SetChangeName from "../Components/SetChangeName.jsx";

export default function Profile(){


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