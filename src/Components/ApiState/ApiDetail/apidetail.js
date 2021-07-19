import React from 'react';
import { useParams } from 'react-router-dom';

const ApiDetails = () => {

    const {id} = useParams()

    const [ detalle, setDetalle] = React.useState([])

    React.useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://fakestoreapi.com/products/${id}`)
            const orders = await data.json()
            setDetalle(orders)
        }
        obtenerDatos()
    },[id])

    
    


    return (
        <section>
            <div>
            <h3>{detalle.title}</h3> - <h3>{detalle.category}</h3>
            <h3>{detalle.description}</h3>
            <img src={detalle.image} ></img>
        </div>

        <div>
            <h3>{detalle.price}$</h3>
            <button>Add to cart</button>
            
        </div>

        </section>
        
    )

}


export default ApiDetails