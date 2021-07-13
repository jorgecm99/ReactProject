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
        <div>
            <h3>{detalle.description}</h3>
        </div>
    )

}


export default ApiDetails