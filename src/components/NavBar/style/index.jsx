import styled from 'styled-components';

export const Container = styled.div`
  height: ${(props) => props.height};
  width: 100%;


    .x {
    width: 40px;
    height: 40px;
    position: absolute;
  left: 85.93%;
  top: 2.35%;
  color: #d4d4d4;
  }

  .hamburger {
    width: 30px;
    height: 30px;
    color: #d4d4d4;
  }

    .x:hover{
    cursor: pointer;
    opacity: 0.8;
  }
  
`;

export const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items:  center;
  margin: 0 auto;
  width: 80%;
  padding: 20px 0;

  img {
    width: 30px;
  }

  .a{
    display: flex;
    width: 120px;
    justify-content: space-between;
  }

  h1 {
    align-content: center;
    padding: 10px 0px;
    font-family: 'Poppins';
    font-weight: 300;
    color: #ebebeb;
  }


  @media (min-width: 1279px ) and (max-width: 1440px ){
    width: 75%;
  }

    @media (min-width: 1441px ){
    width: 70%;
  }


  h3:hover{
      cursor: pointer;
      opacity: 0.8;
    
  }

    h1:hover{
      cursor: pointer;
      opacity: 0.8;
  }

    img:hover{
      cursor: pointer;
      opacity: 0.7;
    
  }

  .hamburger:hover{
    cursor: pointer;
    opacity: 0.8;
  }


`;

export const Links = styled.div`
  
  display: flex;
  justify-content: space-between;
  width: 300px;
  align-content: center;
  font-family: 'Poppins'; 
  color: #ebebeb;
  
  font-size: 14px;

  h3 {

    font-weight: 300;
      :hover {
    cursor: pointer;
    opacity: 0.8;
    color: '#0AaF62';
  }
  }

`;

export const HamburgerLinks = styled.div`
  margin: 0 auto;
  padding-top: 20%;
  text-align: center;

  h3 {
    padding: 20px 0;
    font-size: 30px;
    font-family: 'Poppins';

    font-weight: 300;
    color: #ebebeb;
  }

    h3:hover{
      cursor: pointer;
      opacity: 0.8;
      color: '#0AaF62';
    
  }


`;
