import {Container, RightContent, LeftContent, VerifyButton,BannerContainer, Content, ContentCard} from "./styles"
import {Card} from "../../components/Card"
import {NewsCard} from "../../components/NewsCard"
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
      <Content>
      <BannerContainer>
              <h2>Fato ou fake?</h2>
      </BannerContainer>
        <ContentCard>
        <Card/>
        <Card/>
        <Card/>    
        </ContentCard>

        <NewsCard/>


      

      </Content>
     
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