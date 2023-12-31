
import React, { useEffect, useState } from "react";
import { useFetchData } from "../../helpers/FetchData";
import {db} from '../../firebase/config'
import { CustomCard } from "../CustomCard/CustomCard";


const productos = ({ addToCart }) => {
    const [loading, setLoading] = useState(true);

    const cardData = useFetchData();
    console.log(cardData);
    useEffect(() => {
        db()
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return (
        <>
            <div className="nuestros_productos">
                <h3>Nuestos productos</h3>
            </div>

            <div className="principal-card">


                {loading ? (
                    <h1>Cargando Productos</h1>
                ) : (
                    <div className="card-container">
                        {cardData.map((card) => (
                            <CustomCard card={card} key={card.id} addToCart={addToCart} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default productos;