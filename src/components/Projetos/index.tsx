import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Principais POCs(Provas de conceito)" />

      <section>
        <ProjetoItem
          title="Projeto - BMW"
          type="Website"
          slug="Site-BMW"
          img="https://github.com/felipeholanda2077/Site-BMW/blob/master/BMW-SITE.png?raw=true"
        />
        <ProjetoItem
          title="Projeto - TicketHelp"
          type="App - Ios/Android"
          slug="Ticket_Help"
          img="https://github.com/felipeholanda2077/Ticket_Help/blob/master/src/img/01.PNG?raw=true"
        />
        <ProjetoItem
          title="Plataforma de Cursos"
          type="Website"
          slug="Projeto_Ignite_Visivel"
          img="https://github.com/felipeholanda2077/Projeto-Ignite-Lab/blob/main/event-platform/src/img/Banner1.png?raw=true"
        />
      </section>
      <button type="button">
        <Link href="https://github.com/felipeholanda2077?tab=repositories">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;
