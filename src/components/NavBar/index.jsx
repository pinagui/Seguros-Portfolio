import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import logo from '../../assets/images/logo.png';
import { Container, HamburgerLinks, Links, NavBarStyled } from './style';

export default function NavBar() {
  const [click, setClick] = useState(false);
  const media = useMediaQuery('(min-width: 600px)');

  const handleClickHamburger = () => {
    setClick(!click);
  };

  if (click) {
    return (
      <Container
        height="100vh"
      >

        <IoCloseSharp
          className="x"
          onClick={ handleClickHamburger }
        />

        <HamburgerLinks>
          <h3>Home</h3>
          <h3>Collection</h3>
          <h3>Community</h3>
        </HamburgerLinks>
      </Container>
    );
  }

  return (
    <Container>

      <NavBarStyled>
        <div className="a">
          <img src={ logo } alt="logo" />
          <h1>Logo</h1>
        </div>

        {
          !media ? (
            <GiHamburgerMenu
              className="hamburger"
              onClick={ handleClickHamburger }
            />)
            : (
              <Links className="links">
                <h3>Home</h3>
                <h3>Collection</h3>
                <h3>Community</h3>
              </Links>
            )
        }

      </NavBarStyled>
    </Container>
  );
}
