import styled from 'styled-components';

export const LoadButton = styled.button`
  font-family: Manrope;
  display: block;
  margin: 0 auto;
  font-size: 16px;
  padding: 15px;
  font-weight: 500;
  color: #3470ff;
  border: none;
  border-radius: 14px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: transparent;
  transition: transform 0.3s ease-in-out;
  &:hover,
  &:focus {
    color: #0b44cd;
    transform: scale(1.1);
  }
`;
