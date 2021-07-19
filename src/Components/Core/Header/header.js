import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';



const HeaderStyle = styled ('header')({
    
    
    

})

const Navstyle = styled ('ul')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    background: 'blue',
    height: '60px',
    opacity: '0.9',
    

})

const LinkStyle = styled ('li')({
    marginLeft: '10px',
    listStyle: 'none',
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    fontSize: '20px',
    ":hover":{
        background: 'lightblue',
        padding: '5px 8px'
    }
    
   
})

const LinkStyleForm = styled ('li')({
    marginLeft: '10px',
    listStyle: 'none',
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    fontSize: '20px',
    ":hover":{
        background: 'red',
        padding: '5px 8px'
    }
    
   
})

const Header = () => {
    return (
        
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
                    <Link to="/delivery" style={{textDecoration:"none", color: '#F7F3F3'}}>
                        Delivery
                    </Link>
                    </LinkStyle>

                    

                    <LinkStyle>
                    <Link to="/cart" style={{textDecoration:"none", color: '#F7F3F3'}}>
                         Cart
                    </Link>
                    </LinkStyle>

                    <LinkStyleForm>
                    <Link to="/formulario" style={{textDecoration:"none", color: '#F7F3F3'}}>
                        Sign Up
                    </Link></LinkStyleForm>
                </Navstyle>

            </HeaderStyle>

            
           
        

        
        
    )

};


export default Header