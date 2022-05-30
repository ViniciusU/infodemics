import styled from "styled-components";
import landingPage from "../../assets/landingPage.svg";

export const Container = styled.div`
    display: grid;
    padding: 3% 0 0 10%;
  
    grid-template-columns: 40% 60%;
    grid-template-rows: 1fr;
    grid-template-areas: 
    'left right';
`;


export const LeftContent = styled.main`
    grid-area:left;
    display: flex;
    flex-direction: column;
    padding-right: 5rem;
  
 
    align-items: flex-left;

  h2{
    font-family: 'Montserrat';
    color: #00000;
    font-size: clamp(20px, 5vw, 4rem);
   
    margin-bottom: 2.4rem;
    font-weight: 800;
    
  }
   h3{
    font-family: 'Montserrat', sans-serif;
    color: #00000;
    font-size: clamp(10px, 3vw, 1.8rem);
    margin-bottom: 2.2rem;
  font-weight: 600;
    
  }

   p{
    font-family: 'Montserrat', sans-serif;
    color: #00200;
    font-size: clamp(8px, 2vw, 1rem);
    margin-bottom: 2.2rem;
     font-weight: 500;
    
  }
  
  
  `
export const VerifyButton = styled.button`
   font-family: 'Montserrat', sans-serif;
    outline: none;
    border: none;
    background: var(--yellow-button);
    height: 2.6rem;
    width:6rem; 

:hover{
  filter: brightness(0.9);
  transition: 0.2;
}
  `
   

export const RightContent = styled.div`
    grid-area:right;
    display: flex;
    align-items: center;
    background: url(${landingPage}) no-repeat top/contain;
   

  `



