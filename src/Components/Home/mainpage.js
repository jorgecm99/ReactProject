import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Mainimage = styled ('div')({
    width: '100%',
    textAlign: 'center',
    marginBottom: '10px',
    position: 'relative'
})

const Mainpicture = styled ('img')({
    maxWidth: '100%',

    
})

const Buttonstyle = styled ('button')({
    border: '4px solid white',
    borderRadius: '5px',
    background: 'transparent',
    color: 'white',
    fontWeight: 'bold',
    width: '100px',
    margin: '650px -950px',
    position: 'absolute'

})

const MainComponent = () => {
    return(
        <Mainimage>
            <Mainpicture src="https://www.aboutmanchester.co.uk/wp-content/uploads/2020/09/Shop.jpg" alt="outlet"></Mainpicture>
            <Buttonstyle>
                <Link to="/lista">
                    SHOP
                </Link>
            </Buttonstyle> 
            
        </Mainimage>
    )

}

export default MainComponent