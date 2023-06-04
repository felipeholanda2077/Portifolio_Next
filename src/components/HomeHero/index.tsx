/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp
} from 'react-icons/ai';
import picture from '../../assets/Logo.png';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Felipe Holanda 👋🏻</h2>
        </TextContainer>
        
       <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineWhatsApp
            onClick={() =>
              handleRedirect(
                'http://api.whatsapp.com/send?1=pt_BR&phone=5511953528042'
              )
            }
          />
          <AiOutlineGithub
            onClick={() =>
              handleRedirect('https://github.com/felipeholanda2077')
            }
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/felipe-holandadev/')
            }
          />
        </section>
      </div>
    </Container>
        
        <InfosContainer>
          <CodeItem>
            <span className="purple">Atuação</span> {'\u007B'}
            <div>
              Área de Trabalho:{' '}
              <span className="blue">Dev Front-End,</span>
            </div>
            <div>
              Tempo de experiência: <span className="blue">3 Anos</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Felipe,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Holanda</span>
            </div>
            
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
