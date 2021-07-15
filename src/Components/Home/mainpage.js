import React from 'react';
import styled from '@emotion/styled';

const Mainimage = styled ('div')({
    width: '860px',
    textAlign: 'center'
})

const Mainpicture = styled ('img')({
    maxWidth: '100%'
    
})

const MainComponent = () => {
    return(
        <Mainimage>
            <Mainpicture src="https://www.aboutmanchester.co.uk/wp-content/uploads/2020/09/Shop.jpg" alt="outlet"></Mainpicture>
        </Mainimage>
    )

}

export default MainComponent