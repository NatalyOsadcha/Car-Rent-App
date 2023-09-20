import styled from 'styled-components';

export const Item = styled.li`
  width: 274px;
  height: 426px;
  position: relative;
  transition: transform 0.3s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const Photo = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const ModelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  font-size: 16px;
  line-height: 1, 5;
  font-weight: 500;
  color: #121417;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const Price = styled.span`
  font-size: 16px;
  line-height: 1, 5;
  font-weight: 500;
  color: #121417;
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 1, 5;
  font-weight: 400;
  color: rgba(18, 20, 23, 0.5);
`;
export const Button = styled.button`
  position: absolute;
  bottom: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 99px;
  padding-right: 99px;
  background-color: #3470ff;
  border: none;
  border-radius: 12px;
  font-family: inherit;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    transform: scale(1.05);
    background-color: #0b44cd;
  }
`;

export const Heartbutton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background-color: transparent;
  padding: 5px;
  cursor: pointer;
`;
