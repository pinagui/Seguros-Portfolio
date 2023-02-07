import styled from "styled-components";

export const CardContainer = styled.div`
  width: 327px;
  background-color: #ffffff;
  box-shadow: 0px 10px 94px rgba(204, 204, 204, 0.25);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 30px 0;
  gap: 20px;
  margin-bottom: 30px;

  @media (min-width: 768px)  and (max-width: 900px) {
    height: 350px;
    margin-bottom: 20px;
  }

    @media (min-width: 901px)  and (max-width: 1279px) {
    height: 350px;
    margin-bottom: 20px;
  }

    @media (min-width: 1280px) and (max-width: 1440px) {
    width: 250px;
    height: 340px;
    margin: 0;
}

    @media (min-width: 1441px){
    width: 300px;
    height: 350px;
    margin: 0;
}
`

export const Image = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.src});

  @media (min-width: 1280px) and (max-width: 1440px) {
    width: 70px;
    height: 70px;
    background-size: 70px;
}
`

export const Title = styled.div`
  width: 80%;
  text-align: center;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`

export const Description = styled.div`
  width: 80%;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  /* or 200% */

  text-align: center;

  color: ${(props) => props.color || '#282A2E'};

`