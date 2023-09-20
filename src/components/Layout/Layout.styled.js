import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  color: rgb(52, 112, 255);
  border-bottom: 1px solid gray;
  box-shadow: 0px 3px 3px gray;
  border-radius:8px;
background: linear-gradient(to bottom, rgba(52, 112, 255, 0.3), #ffffff);
`;

export const Nav = styled.nav`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StyledLink = styled(NavLink)`
font-family: Manrope;
font-weight:500;
  color: black;
  text-decoration: none;
  font-size: 18px;
  margin-left: 15px;

  &.active {
    color: tomato;
  }
`;