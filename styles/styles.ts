import styled from 'styled-components';

interface ButtonProps {
  readonly primary: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 1.3em;
`;

export const Input = styled.input`
  display: flex;
  justify-content: flex-end;
  border: none;
  background-color: #e0e0e0;
  width: 400px;
  padding: 5px 10px;
`;


export const InputArea = styled.textarea`
  display: flex;
  justify-content: flex-end;
  border: none;
  width: 400px;
  height: 200px;
  background-color: #e0e0e0;
  padding: 5px 10px;
  resize: none;
`;

export const ImputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxTitle = styled.span`
  font-size: 0.8em;
  font-weight: 600;
`;

export const Button = styled.button<ButtonProps>`
 
  background: ${props => props.primary ? "#424242" : "white"};
  color: ${props => props.primary ? "white" : '#424242'};

  font-size: 0.8em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #424242;
  border-radius: 3px;
  &:hover  {
    cursor: pointer;
  }
`;

export const ListItem = styled.li`
  color: black;
  background-color: #d8d8d8;
  width: 400px;
  padding: 5px 15px;
  margin-bottom: 10px;
  
  &:hover  {
    cursor: pointer;
    color: #e6e6e6;
    background-color: #333333;
  }
`;


export const DescriptionBox = styled.p`
  color: black;
  background-color: #d8d8d8;
  width: 600px;
  padding: 10px 20px;
  margin-bottom: 10px;
`;