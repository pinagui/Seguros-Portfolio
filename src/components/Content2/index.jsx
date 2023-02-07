/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import { useMediaQuery } from '@mui/material';
import health from '../../assets/images/health.png';
import house from '../../assets/images/house.png';
import school from '../../assets/images/school.png';
import transport from '../../assets/images/transport.png';
import { Spacer } from '../../assets/style';
import Cards from '../Cards';
import { Botoes, Container, ContainerDisplay, Grid, Paragraph, Title } from './style';

export default function Content2() {

  const media = useMediaQuery('(min-width: 1280px)');

  if (media) {
    return (
      <Container>
        <Spacer />
        <Grid>
          <div>

            <Title
              font="Poppins"
              fontstyle="normal"
              fontweight="600"
              fontsize="22px"
              fontlineheight="40px"
              color="#fff"

            >
              alguns detalhes que mostra que somos diferentes dos outros seguros
            </Title>

            <Spacer space="5px" />

            <Paragraph
              fontweight="500"
              fontsize="16px"
              color="#fff"
            >
              Oferecemos um sistema muito descontraído para você economizar conosco e seu conforto é o principal
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
                  Mais Detalhes
                </Paragraph>

              </button>
            </Botoes>

          </div>

          <div>

            <ContainerDisplay>

              <Cards
                image={school}
                title="Seguro Escolar"
                description="O seguro escolar é um seguro que garante a proteção de seus filhos em caso de acidentes, doenças e até mesmo morte."
              />

              <Cards
                image={transport}
                title="Seguro de Transporte"
                description="O seguro de transporte é um seguro que garante a proteção de seus automóveis em caso de acidentes, roubo ou danos."
              />


              <Cards
                image={health}
                title="Seguro de Saúde"
                description="Para seguro de saúde, você pode obter tratamento ou curar sua doença para a vida futura."
              />


              <Cards
                image={house}
                title="Seguro de Casa"
                description="rInvestimento para você futuramente ter uma casa e poder ser feliz e descontrair com sua família."
              />
            </ContainerDisplay>

          </div>
        </Grid>

        <Spacer space="40px" />
      </Container>
    )
  }

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
          color="#fff"

        >
          alguns detalhes que mostra que somos diferentes dos outros seguros
        </Title>

        <Spacer space="5px" />

        <Paragraph
          fontweight="500"
          fontsize="16px"
          color="#fff"
        >
          Oferecemos um sistema muito descontraído para você economizar conosco e seu conforto é o principal
        </Paragraph>

        <Spacer />

        <ContainerDisplay>

          <Cards
            image={school}
            title="Seguro Escolar"
            description="O seguro escolar é um seguro que garante a proteção de seus filhos em caso de acidentes, doenças e até mesmo morte."
          />

          <Cards
            image={transport}
            title="Seguro de Transporte"
            description="O seguro de transporte é um seguro que garante a proteção de seus automóveis em caso de acidentes, roubo ou danos."
          />


          <Cards
            image={health}
            title="Seguro de Saúde"
            description="Para seguro de saúde, você pode obter tratamento ou curar sua doença para a vida futura."
          />


          <Cards
            image={house}
            title="Seguro de Casa"
            description="rInvestimento para você futuramente ter uma casa e poder ser feliz e descontrair com sua família."
          />
        </ContainerDisplay>

        <Spacer />

        <Botoes>
          <button className="first">
            <Paragraph
              className="firsttext"
              fontweight="600"
              fontsize="18px"
              color='#0AaF62'
            >
              Mais Detalhes
            </Paragraph>

          </button>
        </Botoes>

      </Grid>

      <Spacer space="40px" />
    </Container >
  );
}
