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

const Title = styled.h1`
  font-size: 16px;
  font-weight: 400;
`;

const RegWrapper = styled.div`
  width: 25%;
  padding: 2rem;
  background-color: white;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  min-width: 30%;
  flex: 1;
  padding: 5px 5px;
  margin: 1rem 1rem;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
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
        <Title>Login</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="password" />

          <Button>Login</Button>

          <Link>Forgot?</Link>
          <Link>Create account</Link>
        </Form>
      </RegWrapper>
    </Container>
  );
};

export default Register;
