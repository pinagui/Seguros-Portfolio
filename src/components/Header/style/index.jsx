/* eslint-disable max-lines */
import styled from 'styled-components';

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;

`;

export const Grid = styled.header`
  width: 95%;
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  padding: 10px;
  gap: 10px;
  word-wrap: break-word;
  justify-content: center;
  
  @media (min-width: 600px) and (max-width: 900px) {
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 901px) and (max-width: 1280px) {
    width: 80%;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

  @media (min-width: 1281px) and (max-width: 1440px) {
    width: 80%;
    padding-left: 5%;
    padding-right: 5%;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    gap: 40px;
}

  @media (min-width: 1441px) {
    width: 85%;
    padding-left: 5%;
    padding-right: 5%;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    gap: 100px;
}



  `;

export const Title = styled.h1`
  font-family: ${(props) => props.font || 'Poppins'};
  font-style: ${(props) => props.fontstyle || 'normal'};
  font-weight: ${(props) => props.fontweight || '600'};
  font-size: ${(props) => props.fontsize || '36px'};
  line-height: ${(props) => props.fontlineheight || '54px'};
  display:flex;
  justify-content: center;
  text-align: center;

  text-transform: capitalize;

  color: #FFFFFF;

      @media (min-width: 600px) and (max-width: 900px) {
  font-weight: 600px;
  font-size: 40px;
  line-height: 54px;
  }

    @media (min-width: 901px) and (max-width: 1280px) {
  font-weight: 600px;
  font-size: 30px;
  line-height: 54px;
  text-align: start;
  }



    @media (min-width: 1281px) and (max-width: 1440px) {
  font-weight: 600px;
  font-size: 40px;
  line-height: 54px;
  text-align: start;
  
}

  @media (min-width: 1441px) {
    font-weight: 600px;
    font-size: 55px;
    line-height: 54px;
    text-align: start;
  }
`;

export const Image = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 300px;
  height: 300px;
  background-size: 300px;
  border-radius: 15%;
  margin: 0 auto;

    @media (min-width: 600px) and (max-width: 900px) {
    width: 400px;
    height: 400px;
    background-size: 400px;
  }

  @media (min-width: 901px) and (max-width: 1280px) {
    width: 350px;
    height: 350px;
    background-size: 350px;
  }

  @media (min-width: 1281px) and (max-width: 1440px) {
    width: 520px;
    height: 520px;
    background-size: 520px;
    margin: 0;
}

  @media (min-width: 1441px) {
    width: 600px;
    height: 600px;
    background-size: 600px;
    margin: 0;
  }
`;

export const Paragraph = styled.p`
  font-family: ${(props) => props.font || 'Poppins'};
  font-style: ${(props) => props.fontstyle || 'normal'};
  font-weight: ${(props) => props.fontweight || '400'};
  font-size: ${(props) => props.fontsize || '16px'};
  line-height: ${(props) => props.fontlineheight || '32px'};
  display:flex;
  justify-content: center;
  text-align: center;

  color: rgba(255, 255, 255, 0.6);

        @media (min-width: 600px) and (max-width: 900px) {
  font-weight: 500px;
  font-size: 20px;
  line-height: 26px;
  }

        @media (min-width: 901px) and (max-width: 1280px) {
  font-weight: 600px;
  font-size: 16px;
  padding: 15px 0;
  line-height: 30px;
  text-align: start;
}

  @media (min-width: 1281px) and (max-width: 1440px) {
    font-weight: 600px;
  font-size: 20px;
  padding: 15px 0;
  line-height: 30px;
  text-align: start;
}

  @media (min-width: 1441px) {
  font-weight: 600px;
  font-size: 24px;
  padding: 15px 0;
  line-height: 30px;
  text-align: start;
  }
`;

export const Botoes = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;

  button.first {
  border: none;

  padding: 20px;
  decoration: none;
  background: #2FA8FE;
  border-radius: 24px;

  :hover {
    cursor: pointer;
    transition: .5s;
    background: #FFFF;
    color: #2FA8FE;

    .firsttext{
      color: #2FA8FE;
    }

  }
  }

    button.second {
  background: #FFFFFF;

  padding: 20px;
  decoration: none;
  border-radius: 99px;
  border: none;

  :hover {
    cursor: pointer;
    transition: .7s;
    background: #2FA8FE;

  .play{
        color: #FFFF;
      }
  }
    
    .play {
      width: 24px;
      height: 24px;
      color: #2FA8FE;
    }

  }

  @media (min-width: 901px) and (max-width: 1280px) {
    display: flex;
    justify-content: start;
  gap: 25px;

  button.first {
  border: none;

  padding: 10px;
  }

  button.first .firsttext {
  border: none;
  font-weight: 700;
  padding: 10px;
  }

}
@media (min-width: 1281px) and (max-width: 1440px) {
  display: flex;
  justify-content: start;
  gap: 35px;

button.first {
border: none;

padding: 10px;
}

button.first .firsttext {
border: none;
font-weight: 700;
padding: 10px;
}

}

  @media (min-width: 1441px) {
 display: flex;
  justify-content: start;
  gap: 35px;

button.first {
border: none;

padding: 10px;
}

button.first .firsttext {
border: none;
font-weight: 700;
padding: 18px;
}
  }
`;
