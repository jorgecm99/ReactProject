import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';



const HeaderStyle = styled ('header')({
    textAlign: 'center',
    background: '#776A6A',
    verticalAlign: 'center',
    opacity: '0.9',
    ":hover":{
        background: 'white'
    }

})

const Navstyle = styled ('ul')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'

})

const LinkStyle = styled ('li')({
    marginLeft: '10px',
    listStyle: 'none',
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    fontSize: '20px',
    marginTop: '25px',
   
})

const Header = () => {
    return (
        <header>
            <HeaderStyle>
                <Navstyle>
                    <LinkStyle>
                    <Link to="/" style={{textDecoration:"none", color: '#F7F3F3'}}>Home</Link>
                    </LinkStyle>

                    <LinkStyle>
                    <Link to="/lista" style={{textDecoration:"none", color: '#F7F3F3'}}>
                Products
            </Link>
                    </LinkStyle>

                    <LinkStyle>
                    <Link to="/formulario" style={{textDecoration:"none", color: '#F7F3F3'}}>
                Sign Up
            </Link></LinkStyle>
                </Navstyle>

            </HeaderStyle>

            
           
        

        </header>
        
    )

};


export default Header