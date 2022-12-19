import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
      center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
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
  margin: 10px;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 11px;
  font-size: 15px;
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
