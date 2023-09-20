import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, StyledLink } from './Layout.styled';
import Loader from 'components/Loader/Loader';
export default function Layout() {
  return (
    <Container style={{ maxWidth: 1184, margin: '0 auto'}}>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}
