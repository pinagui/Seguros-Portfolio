/* eslint-disable max-lines */
import styled from 'styled-components';

export const ContainerDisplay = styled.div`


  @media (min-width: 768px) and (max-width: 900px) {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 901px)  and (max-width: 1279px) {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
  }

    @media (min-width: 1280px)  and (max-width: 1440px) {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

      @media (min-width: 1441px) {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;


    @media (min-width: 901px)  and (max-width: 1279px) {
    display: flex;
    width: 80%;
    margin: 0 auto;
  }

    @media (min-width: 1280px)  and (max-width: 1440px) { }

          @media (min-width: 1441px) {
  }

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

  @media (min-width: 901px) and (max-width: 1279px) {
}

  @media (min-width: 1280px) and (max-width: 1440px) {
    width: 80%;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
}

  @media (min-width: 1441px) {
    width: 85%;
    padding-left: 5%;
    padding-right: 5%;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    gap: 80px;
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
  text-align:center;
  padding-top: 20px;

  text-transform: capitalize;
  color: ${(props) => props.color || '#282A2E'};

      @media (min-width: 600px) and (max-width: 900px) {
  font-weight: 600px;
  font-size: 35px;
  line-height: 54px;
  text-align:center;
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
  }

    @media (min-width: 901px) and (max-width: 1279px) {
  font-weight: 600px;
  font-size: 42px;
  line-height: 54px;
  text-align:center;
  }



    @media (min-width: 1280px) and (max-width: 1359px) {
  font-weight: 600px;
  font-size: 40px;
  line-height: 54px;
  text-align:start;
}

    @media (min-width: 1360px) and (max-width: 1440px) {
  font-weight: 600px;
  font-size: 44px;
  line-height: 54px;
  text-align:start;
}

  @media (min-width: 1441px) {
    font-weight: 600px;
    font-size: 55px;
    line-height: 64px;
    text-align:start;
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
  color: ${(props) => props.color || 'rgba(255, 255, 255, 0.974)'};

        @media (min-width: 600px) and (max-width: 900px) {
          width: 80%;
          margin: 0 auto;
  font-weight: 500px;
  font-size: 20px;
  line-height: 26px;
  }

        @media (min-width: 901px) and (max-width: 1279px) {
  font-weight: 600px;
  font-size: 22px;
  width: 80%;
  text-align: center;
  margin: 0 auto;
  padding: 15px 0;
  line-height: 30px;
}

  @media (min-width: 1280px) and (max-width: 1440px) {
    font-weight: 600px;
  font-size: 22px;
  padding: 15px 0;
  line-height: 30px;
  text-align: start;
}

  @media (min-width: 1441px) {
  font-weight: 600px;
  font-size: 24px;
  padding: 15px 0;
  line-height: 40px;
  text-align: start;
  }
`;

export const Botoes = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  
  button.first {
  width: ${(props) => props.width || '100%'};
  border: none;

  padding: 20px;
  decoration: none;
  background: #FFF;
  border-radius: 24px;
  

  :hover {
    cursor: pointer;
    transition: .5s;
    background: #093a23a3;

    .firsttext{
      color: #FFF;
    }

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
