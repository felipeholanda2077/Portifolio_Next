import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const FormContainer = styled.section`
  margin-top: 8rem;
  width: 100%;

  > form {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    position: relative;
  }

  > button {
    margin-top: 1rem;
    border: none;
    padding: 1rem 2.5rem;
    color: #fff;
    font-weight: 300;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.primary};
    transition: 0.5s;
    position: relative;

    &:hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  resize: none;

  grid-column: 1 / 3;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Button = styled.button`
  height: 34px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  background-color: #0fdbff;
  font-size: 18px;
  transition: background-color, transform 0.8s;

  background-color: #0fe3ff;
  transform: scale(1.01);

`;
