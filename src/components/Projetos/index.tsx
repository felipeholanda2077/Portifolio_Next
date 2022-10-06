import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

function Projetos() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />

      <section>
        <ProjetoItem
          title="Projeto - BMW"
          type="Website"
          slug="projeto01"
          img="https://github.com/felipeholanda2077/Site-BMW"
        />
        <ProjetoItem
          title="Projeto - TicketHelp"
          type="App - Ios/Android"
          slug="projeto02"
          img="https://github.com/felipeholanda2077/Ticket_Help"
        />
        <ProjetoItem
          title="Plataforma de Cursos"
          type="Website"
          slug="projeto03"
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
