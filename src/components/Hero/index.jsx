/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import { useMediaQuery } from '@mui/material';
import { Spacer } from '../../assets/style';
import { Botoes, Container, Grid, Paragraph, Title } from './style';

export default function Hero() {
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
            color="#eeeeee"

          >
            Estamos Prontos Para Ajudá-lo a Qualquer Momento e Escolha o Seguro Certo Para Você

          </Title>

          <Spacer />

          <Paragraph
            fontweight="500"
            fontsize="18px"
            color="#eeeeee"
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

        <div>

          <Title
            font="Poppins"
            fontstyle="normal"
            fontweight="700"
            fontsize="36px"
            fontlineheight="46px"
            color="#ebebeb"

          >
            Estamos Prontos Para Ajudá-lo a Qualquer Momento e Escolha o Seguro Certo Para Você


          </Title>

          <Spacer />

          <Paragraph
            fontweight="500"
            fontsize="22px"
            color="#ebebeb"
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
