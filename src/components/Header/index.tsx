import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink
          title="Projetos"
          path="https://github.com/felipeholanda2077?tab=repositories"
        />
      </ul>
    </Container>
  );
}

export default Header;
