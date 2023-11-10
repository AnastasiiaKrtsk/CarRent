import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;

  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 50px auto;
  text-align: center;
  max-width: 800px;
  font-size: 45px;
  font-weight: 700;
  color: #d9d9d9;
  margin-bottom: 50px;
`;
export const TittleSpan = styled.span`
  color: #bf8f00;
`;

export const LinkBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  text-decoration: none;
  font-weight: 600;
  background-color: #202123;
  color: #bf8f00;
  width: 200px;
  height: 60px;

  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #bf8f00;
    color: #202123;
  }
`;
