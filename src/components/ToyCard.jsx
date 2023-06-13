import { data } from "autoprefixer";
import { Link } from "react-router-dom";


const ToyCard = ({ toy }) => {

    const { _id, name, quantity, price, email, category, details, photo } = toy;



    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name: {name}</h2>
                <p>Quantity: {quantity}</p>
                <p>price: {price}</p>
                <p>email: {email}</p>
                <p>category: {category}</p>
                <p>details: {details}</p>
                <div className="card-actions">
                    <Link to="/details"><button className="btn btn-primary">Viw Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;