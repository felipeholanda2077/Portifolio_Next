import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
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
  );
}

export default Footer;
