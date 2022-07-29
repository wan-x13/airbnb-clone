import React from 'react';
import styled from 'styled-components';
import KatiePhoto from "../assets/katie-zaferes.png"
import start from  '../assets/star.png'


const CardContainer = styled.section`
      display : flex;
      flex-direction : column;
      gap: 30px;
      margin-top : 20px;
      margin-left: 115px;

     `
const Img = styled.img`
      border-radius : 9px;
      height: 420px;
      width : 350px;
     `;
const CardContent = styled.div`
      display: flex;
      flex-direction: column;
  `
const StartImg = styled.img`
  width : 30px;
  height: 30px;
  `
const Country = styled.h3`
     color:#918E9B;
     font-size: 20px;
     margin-top: 0;
`
const ContainerCountry = styled.div`
      display :flex;
      gap : 10px;
      margin-top: 5px  ;

     `
const DescriptProducts = styled.p`
        color: #222222;
        font-size: 12px;
        font-size: 24px;
        margin : 0;
   `;

const PricePerPerson = styled.p`
    color: #222222;
    font-size: 25px;
    margin : 5px 0;

    &>span{
        font-weight : 600;
    }
`
const Card = () => {
    return (
        <CardContainer>
            <CardContent>
                <Img src={KatiePhoto}/>
                <ContainerCountry>
                    <StartImg src={start}/>
                    <Country> <span>5.0
                         </span>(6) USA</Country>
                </ContainerCountry>
                <DescriptProducts>
                  Life lessons with Katie Zaferes
                </DescriptProducts>
                <PricePerPerson>
                    <span>From $136 </span>
                    / person
                </PricePerPerson>
            </CardContent>
            
        </CardContainer>
    );
};

export default Card;