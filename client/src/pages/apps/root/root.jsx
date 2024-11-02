import Header from "./Components/Header.jsx";
import Navbar from "../../../Components/Navbar.jsx";
import AppGallery from "./Components/AppGallery.jsx";
import {usePageTitle} from "../../../hooks/usePageTitle.jsx";

export default function Root(){
    usePageTitle('home')

    return(
        <div>
            <Navbar />
            <Header />
            <AppGallery />
        </div>
    )
}