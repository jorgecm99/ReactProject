import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';



const HeaderStyle = styled ('header')({
    textAlign: 'center',
    color: 'black',
    marginTop: '15px',
})

const Header = () => {
    return (
        <header>
            <HeaderStyle>
            <Link to="/" className="btn btn-dark">
                Inicio
            </Link>

            <Link to="/lista" className="btn btn-dark">
                Lista
            </Link>

            <Link to="/formulario" className="btn btn-dark">
                Formulario
            </Link>
            </HeaderStyle>

            
           
        

        </header>
        
    )

};


export default Header