import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(https://plus.unsplash.com/premium_photo-1663047660467-351c12a74d7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
      center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegWrapper = styled.div`
  width: 40%;
  padding: 2rem;
  background-color: white;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
`;
const Input = styled.input`
  min-width: 30%;
  flex: 1;
  padding: 10px 5px;
  margin: 1rem 2rem;
`;
const Agree = styled.span`
  margin-top: 5px;
  font-size: 10px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s ease-out;
  }
`;

const Register = () => {
  return (
    <Container>
      <RegWrapper>
        <Title>Creat and account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />

          <Agree>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            atque, porro repellat ducimus velit inventore molestiae sit
            doloremque id? Fugit.
          </Agree>

          <Button>Create Now!</Button>
        </Form>
      </RegWrapper>
    </Container>
  );
};

export default Register;
