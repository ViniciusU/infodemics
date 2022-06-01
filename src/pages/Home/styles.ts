import styled from "styled-components";
import landingPage from "../../assets/landingPage.svg";

export const Container = styled.div`
    display: grid;
    padding: 3% 0 0 5%;
    

  
    grid-template-columns: 40% 60%;
    grid-template-rows: 1fr 3fr;
    grid-template-areas: 
    'left right'
    'content content';
`;


export const LeftContent = styled.main`
    grid-area:left;
    display: flex;
    flex-direction: column;
    height: 80vh;
    padding-right: 5rem;
  
 
    align-items: flex-left;

  h2{
    font-family: 'Montserrat';
    color: black;
    font-size: clamp(20px, 5vw, 4rem);
   
    margin-bottom: 2.4rem;
    font-weight: 800;
    
  }
   h3{
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: clamp(10px, 3vw, 1.8rem);
    margin-bottom: 2.2rem;
  font-weight: 600;
    
  }

   p{
    font-family: 'Montserrat', sans-serif;
    color: black;
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
    height: 80vh;
    display: flex;
    align-items: center;
    background: url(${landingPage}) no-repeat top/contain;
   

  `

export const Content = styled.div`
    grid-area:content;
    display: flex;

    height: 100vh;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;


`;

export const ContentCard = styled.div`
   
    display: flex;
    justify-content: flex-start;
    width:80vw;
    margin-bottom: 2.4rem;

`;



export const BannerContainer  = styled.div`
   
    width: min(80vw, 80rem);
    height: 8rem;
    background: var(--yellow-button);
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 1rem 1rem 0 0;
    margin-bottom: 2.4rem;



    h2{
    font-family: 'Montserrat';
    color: black;
    font-size: clamp(20px, 5vw, 4rem);
    font-weight: 800;

    
  }


  @media (max-width: 700px) {
    height: 5rem;
  }



`

