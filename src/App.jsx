import NavBar from './components/NavBar';
import { Container } from './assets/style';
import Header from './components/Header';

export default function App() {
  return (
    <div>
      <Container>
        <NavBar />
        <Header />
      </Container>
    </div>
  );
}
