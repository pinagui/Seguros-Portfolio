/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import { useMediaQuery } from '@mui/material';
import { BsPlayFill } from 'react-icons/bs';
import photo from '../../assets/images/photo.png';
import { Spacer } from '../../assets/style';
import { Botoes, Container, Grid, Image, Paragraph, Title } from './style';

export default function Header() {
  const media = useMediaQuery('(min-width: 900px)');

  if (!media) {
    return (
      <Container>
        <Spacer />
        <Grid>
          <Title
            font="Poppins"
            fontstyle="normal"
            fontweight="700"
            fontsize="26px"
            fontlineheight="36px"
          >
            Seguro Para Você
            E Seus Entes Queridos

          </Title>

          <Spacer />

          <Image src={photo} />

          <Spacer />

          <Paragraph
            fontweight="500"
            fontsize="18px"
          >
            Estamos aqui para criar um novo modelo de como economizar seu dinheiro corretamente. É super eficiente! Faça isso agora não se esqueça
          </Paragraph>

          <Spacer />

          <Botoes>
            <button className="first">
              <Paragraph
                className="firsttext"
                fontweight="600"
                fontsize="18px"
                color='#0AaF62'
              >
                Comece Agora
              </Paragraph>

            </button>
            <button className="second">
              <BsPlayFill className="play" />
            </button>
          </Botoes>

        </Grid>
      </Container>
    );
  }

  return (
    <Container>
      <Spacer />
      <Grid>

        <div>

          <Title
            font="Poppins"
            fontstyle="normal"
            fontweight="700"
            fontsize="36px"
            fontlineheight="46px"

          >
            Seguro Para Você
            E Seus Entes Queridos

          </Title>

          <Spacer />

          <Paragraph
            fontweight="500"
            fontsize="22px"
          >
            Estamos aqui para criar um novo modelo de como economizar seu dinheiro corretamente. É super eficiente! Faça isso agora não se esqueça
          </Paragraph>

          <Spacer />

          <Botoes>
            <button className="first">
              <Paragraph
                className="firsttext"
                fontweight="600"
                fontsize="24px"
                color='#0AaF62'
              >
                Começe Agora
              </Paragraph>

            </button>
            <button className="second">
              <BsPlayFill className="play" />
            </button>
          </Botoes>

        </div>

        <Image src={photo} />

      </Grid>
    </Container>
  );
}
