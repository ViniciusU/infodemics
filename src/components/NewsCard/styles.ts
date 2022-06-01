import styled from "styled-components";



export const NewsContainer = styled.div`

    display:grid;
    width: 80vw;
    grid-gap: 1rem;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
 
`;


export const Card = styled.div`

    width: 15rem;
    height: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
 
`;


