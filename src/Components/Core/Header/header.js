import React from 'react';
import routes from '../../../Config/routes';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

/*const HeaderStyle = styled ('header')({
    textAlign: 'center',
    color: 'yellow',
})*/

const Header = () => {
    return (
        /*<HeaderStyle>
            */<h1>Todoist</h1>/*
           <NavStyle>
                <NavLink to={routes.tareas}>Pendientes</NavLink>
                <NavLink to={routes.completadas}>Completadas</NavLink>
            </NavStyle>
        </HeaderStyle>*/
    )

};


export default Header