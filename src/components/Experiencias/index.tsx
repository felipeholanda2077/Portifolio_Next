import SectionTitle from '../SectionTitle';
import ExeperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="02 Anos" description="de experiência" />

      <section>
        <ExeperienciaItem
          year="2021"
          title="Freelancer"
          description="Desenvolvimento de sites e aplicações para desktop e mobile em modelo de e-commerce."
        />
        <ExeperienciaItem
          year="2022"
          title="Programador Shopify"
          description="Criação de e-commerce de modo freelancer para clientes através da plataforma Shopify."
        />
        <ExeperienciaItem
          year="2022"
          title="Freelancer Front-End"
          description="Criação de Tutoriais para usuarios dentro de uma plataforma de criação de e-commerces avançados."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
