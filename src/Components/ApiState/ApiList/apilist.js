import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Contenedor = styled ('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems:'flex-start',
    maxWidth: '420px',
    textAlign: 'center',
    border: '3px solid black',
    margin: '10px auto',
    paddingTop: '20px'

})

const Imagencont = styled ('img')({
    width: '40%'
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
            
                        <Link to={`/lista/${item.id}`} >
                            <Imagencont src={item.image} alt={item.title} />
                            <h4>Name: {item.title}</h4>
                            
                        </Link>
                        
                        
                    </Contenedor>
              ))}
             : 
              <h3>¡No hay personajes cargados!</h3>
                    
                
            
        
        </div>
        
    )
};


export default Apilist