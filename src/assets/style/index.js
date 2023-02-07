import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

export const Container = styled.div`
  background: linear-gradient(109.95deg, #0AaF62 26.62%, #11A97E 60.83%);
  
  height: 3700px;

  @media (min-width: 768px) and (max-width: 900px) {
    height: 3100px;
  }

  @media (min-width: 901px) and (max-width: 999px) {
    height: 2500px;
  }

  @media (min-width: 1000px) and (max-width: 1280px) {
    height: 2350px;
  }

    @media (min-width: 1281px) and (max-width: 1439px) {
    height: 2200px;
  }

      @media (min-width: 1440px) {
    height: 2400px;
  }
  `;

export const Spacer = styled.div`
  padding-top: ${(props) => props.space || '20px'};
  `;
