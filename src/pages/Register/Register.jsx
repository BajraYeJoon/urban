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
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 15px;
`;
const Input = styled.input`
  min-width: 30%;
  flex: 1;
  padding: 10px 5px;
  margin: 1rem 1rem;
`;
const Agree = styled.span`
  margin-top: 5px;
  font-size: 10px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s ease-out;
  }
`;

const Link = styled.a`
  margin-left: 12rem;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const Register = () => {
  return (
    <Container>
      <RegWrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="E-mail" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />

          <Agree>
            By creating an account, you agree to our terms and conditions and
            privacy policy. See terms and conditions and privacy policy
            agreement.
          </Agree>

          <Button>Create Now!</Button>
          <Link href="/login">Already a User ? Login Now</Link>
        </Form>
      </RegWrapper>
    </Container>
  );
};

export default Register;
