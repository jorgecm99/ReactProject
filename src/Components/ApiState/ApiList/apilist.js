import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Contenedor = styled ('div')({
    maxWidth: '420px',
    textAlign: 'center',
    border: '3px solid black',
    margin: '10px auto',
    paddingTop: '20px',
    background: 'white'

})

const Imagencont = styled ('img')({
    width: '40%'
})

const Price = styled ('div') ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 'auto 10px',
    alignItems: 'flex-start'
})

const Apilist = () => {

    const [ datos, setDatos] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    },[])

    const obtenerDatos = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const orders = await data.json()
        setDatos(orders)
    }


    return (
        <div>
       
            {
                datos.map(item => (
                    <Contenedor key={JSON.stringify(item)}>
            
                        <Link to={`/lista/${item.id}`} style={{textDecoration:"none"}} >
                            <Imagencont src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>        
                        </Link>
                        <Price>
                                <p>{item.price}$</p>
                                <button>Add to cart</button>
                        </Price> 
                        
                        
                    </Contenedor>
              ))}
                    
                
            
        
        </div>
        
    )
};


export default Apilist