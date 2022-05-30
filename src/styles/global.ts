import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`

  .BurguerMenu{
position: relative;

  }
  :root{
    --background: rgba(203,255,224,0.12);
    --yellow-button: #FED916;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  //font-size: 16px (Desktop)
  html{
    @media (max-width: 1080px){
      font-size: 93.75%; //15px;
    }

    @media(max-width: 720px){
      font-size: 87.5%; //14px;
    }


  }



body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'iceland', sans-serif;
    font-weight: 400;

  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }
  button{
    cursor: pointer;
  }

  [disable]{
    opacity: 0.6;
    cursor: not-allowed;
  }

.whiteH1{
  color: white;

}


`