/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import { useMediaQuery } from '@mui/material';
import { BsPlayFill } from 'react-icons/bs';
import photo from '../../assets/images/photo.jpg';
import { Spacer } from '../../assets/style';
import { Botoes, Container, Grid, Image, Paragraph, Title } from './style';

export default function Content1() {
  const media = useMediaQuery('(min-width: 900px)');

  if (!media) {
    return (
      <Container>
        <Spacer />
        <Grid>
          <Title
            font="Poppins"
            fontstyle="normal"
            fontweight="600"
            fontsize="22px"
            fontlineheight="40px"

          >
            Estamos Prontos Para Ajudá-lo a Qualquer Momento e Escolha o Seguro Certo Para Você

          </Title>

          <Spacer />

          <Image src={ photo } />

          <Spacer />

          <Paragraph
            fontweight="500"
            fontsize="18px"
            color="#282A2E"
          >
            Estamos prontos para cuidar, direcionar e ajudá-lo de todo o coração, a escolher e obter o melhor seguro para você e sua família.
          </Paragraph>

          <Spacer />

          <Botoes>
            <button className="first">
              <Paragraph
                className="firsttext"
                fontweight="600"
                fontsize="18px"
              >
                Mais Detalhes
              </Paragraph>

            </button>
          </Botoes>

        </Grid>

        <Spacer space="40px" />
      </Container>
    );
  }

  return (
    <Container>
      <Spacer />
      <Grid>

        <Image src={ photo } />

        <div>

          <Title
            font="Poppins"
            fontstyle="normal"
            fontweight="700"
            fontsize="36px"
            fontlineheight="46px"

          >
            Estamos Prontos Para Ajudá-lo a Qualquer Momento e Escolha o Seguro Certo Para Você


          </Title>

          <Spacer />

          <Paragraph
            fontweight="500"
            fontsize="22px"
            color="#282A2E"
          >
            Estamos prontos para cuidar, direcionar e ajudá-lo de todo o coração, a escolher e obter o melhor seguro para você e sua família.
          </Paragraph>

          <Spacer />

          <Botoes>
            <button className="first">
              <Paragraph
                className="firsttext"
                fontweight="600"
                fontsize="24px"
                color='#FFFF'
              >
                Começe Agora
              </Paragraph>

            </button>
          </Botoes>

        </div>

      </Grid>

      <Spacer />
    </Container>
  );
}
