import NavBar from './components/NavBar';
import { Container } from './assets/style';
import Header from './components/Header';
import Content1 from './components/Content1';
import {Spacer} from './assets/style';

export default function App() {
  return (
    <div>
      <Container>
        <NavBar />
        <Header />
        <Spacer space="40px" />
        <Content1 />
      </Container>
    </div>
  );
}
