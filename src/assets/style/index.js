import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle` * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

export const Container = styled.div`
  background: linear-gradient(109.95deg, #0C2F62 26.62%, #24497E 60.83%);
  height: 5000px;
  `;

export const Spacer = styled.div`
  padding-top: ${(props) => props.space || '20px'};
  `;
