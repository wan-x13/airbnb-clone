import React from 'react';
import airbnbLogo from '../assets/logo-airbnb.png'
import styled from 'styled-components';

const NavbarContainer = styled.nav`
   margin: 0;
   display : flex;
   padding: 20px 36px;
   box-shadow: 0px 2.9825618267059326px 7.456404209136963px 0px #0000001A;


   &>img{
    height: 50px;
   }
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <img src={airbnbLogo}/>

            
        </NavbarContainer>
    );
};

export default Navbar;