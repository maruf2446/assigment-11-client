import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Shop from "../Shop/Shop";
import ToyCard from "../../../components/ToyCard";
import Subcatogary from "../../Share/subcatgore/Subcatogary";
import Gallery from "../../../assets/Gallery/Gallery";


const Home = () => {

   

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Subcatogary></Subcatogary>
           
        </div>
    );
};

export default Home;