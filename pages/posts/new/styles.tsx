import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  margin-left: 30px;
  font-size: 1.3em;
`;

export const Input = styled.input`
  display: flex;
  justify-content: flex-end;
  border: none;
  background-color: #ECECEC;
  width: 400px;
  padding: 5px 10px;
`;


export const InputArea = styled.textarea`
  display: flex;
  justify-content: flex-end;
  border: none;
  width: 400px;
  height: 200px;
  background-color: #ECECEC;
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

export const Button = styled.button`
 
  background: ${props => props.primary ? "#424242" : "white"};
  color: ${props => props.primary ? "white" : '#424242'};

  font-size: 0.8em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #424242;
  border-radius: 3px;
`;