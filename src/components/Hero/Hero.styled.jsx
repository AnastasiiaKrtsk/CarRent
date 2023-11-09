import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  margin-top: 85px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  width: 600px;
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 50px;
  color: ${theme.colors.black};
`;

export const Btn = styled.button`
  background-color: #3470ff;
  width: 200px;
  padding: 12px 50px;
  border: none;
  border-radius: 12px;

  &:hover {
    background-color: #0b44cd;
  }
`;
export const LinkBtn = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 600;
`;
