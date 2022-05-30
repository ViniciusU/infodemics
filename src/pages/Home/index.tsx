import {Container, RightContent, LeftContent, VerifyButton} from "./styles"
import landingPage from "../../assets/landingPage.svg";


export function Home() {
  //const [open, setOpen] = useState(false);
  return (

    <div>
    <Container>

      <LeftContent>
      <h2>Classificando Notícias</h2>
      <h3>Deseja enviar algo?</h3>
        <p>Apenas clique no botão abaixo!</p>
 <VerifyButton>Verifique</VerifyButton>
      </LeftContent>
      <RightContent>
     ...
      </RightContent>
    </Container>

      
    </div>
  )}


export function Outro() {
  //const [open, setOpen] = useState(false);
  return (

    <div>
    <h1>Outro</h1>
    </div>
  )}