import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../images/Logo.png';

const Header = () => (
  <HeaderWrapper>
    <Link to='/'>
      <img src={Logo} alt='logo' />
    </Link>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  background-color: #535353;
  padding: 0.75rem 1rem;
`;

export default withRouter(Header);
