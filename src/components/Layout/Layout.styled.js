import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  color: black;
  border-bottom: 1px solid gray;
  box-shadow: 0px 3px 3px gray;
`;

export const Nav = styled.nav`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 18px;
  margin-left: 15px;

  &.active {
    color: red;
  }
`;