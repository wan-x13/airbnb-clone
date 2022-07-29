import React from 'react';
import styled from 'styled-components';
import heroImage from "../assets/photo-grid.png"


const HeroContainer = styled.div`
        display : flex;
        flex-direction : column;
    `;
const Img = styled.img` 
        width: 900px;
        height: 500px;
  `;
const Content = styled.div`
   margin-left: 120px;

`
const Experience = styled.h1`
   font-size: 70px;
   font-weight: 600;
   line-height: 39.6px;
`
const EXcontent = styled.p`
    font-size: 30px;
    color: #222222;
    line-height: 36px;
    width: 600px;
  `
const ImgContainer = styled.div`
       display: flex;
       justify-content: center;
       align-items: center;
       padding : 40px 0;
      `
const Hero = () => {
    return (
        <HeroContainer>
            <ImgContainer>
            <Img src={heroImage}/>
            </ImgContainer>
          
            <Content>
                <Experience>
                Online Experiences
                </Experience>
                <EXcontent>
                Join unique interactive activities led
                 by one-of-a-kind hosts—all without leaving home.
                </EXcontent>

            </Content>

            
        </HeroContainer>
    );
};

export default Hero;