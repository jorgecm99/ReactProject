import React, { useEffect } from 'react';

const Apilist = () => {

    const [ datos, setDatos] = React.useState([])

    React.useEffect(() => {
        //console.log(useEffect)
        obtenerDatos()
    },[])

    const obtenerDatos = async () => {
        const data = await fetch('https://fakestoreapi.com/products')
        const orders = await data.json()
        //console.log(orders)
        setDatos(orders)
    }


    return (
        <div>
            <h1>Oh my</h1>
        <ul>
            {
                datos.map(item => (
                    <div key={JSON.stringify(item)}>
                        <h4>Id: {item.id}</h4>
                        <h4>Name: {item.title}</h4>
  
                        <img src={item.image} alt={item.title} />
                    </div>
              ))}
             : 
              <h3>¡No hay personajes cargados!</h3>
                    
                
            
        </ul>
        </div>
        
    )
};


export default Apilist