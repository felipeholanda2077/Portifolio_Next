import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import Footer from '../components/Footer';
import FormContato from '../components/FormContato';
import BackGround from '../components/BackGround';

export default function Home() {
  return (
    <HomeContainer>
      <BackGround />
      <Header />
      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projetos />
        <Conhecimentos />
        <FormContato />
      </main>
      <Footer />
    </HomeContainer>
  );
}
