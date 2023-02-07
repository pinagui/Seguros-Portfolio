import NavBar from './components/NavBar';
import { Container } from './assets/style';
import Header from './components/Header';
import Content1 from './components/Content1';
import {Spacer} from './assets/style';
import Content2 from './components/Content2';

export default function App() {
  return (
    <div>
      <Container>
        <NavBar />
        <Spacer />
        <Header />
        <Spacer space="40px" />
        <Content1 />
        <Spacer space="40px" />
        <Content2 />
      </Container>
    </div>
  );
}
