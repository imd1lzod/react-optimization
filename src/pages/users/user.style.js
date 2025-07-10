import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 8px;
  background: black;
  color: white;
  border: none;
`;

export const UserCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
gap: 20px;
`

export const UserCard = styled.div`
  width: 250px;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 30px;
  text-align: center;
  /* margin:  0 auto; */

  h4 {
    border: 1px solid black;
  }
`