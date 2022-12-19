import styled from "styled-components";
import { images } from "../../constants";

const Container = styled.div`
  height: 60vh;
  width: 60%;
  display: flex;

  justify-content: center;
  align-items: center;
  position: relative;
  left: 21%;
`;

const Image = styled.img`
  width: 50%;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 50%;

  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 35px;
  margin-bottom: 2px;
`;
const Desc = styled.p`
  margin-top: 5px;
  margin-bottom: 10px;
`;
const InputContainer = styled.input`
  padding: 0.2rem 1rem;
  padding-right: 15px;
`;
const Button = styled.button`
  margin-top: 10px;
  padding: 0.2rem 1rem;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s ease-out;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Image src={images.newsletter} />
      <InfoContainer>
        <Title>Stay Up-to-Date with Our Monthly Newsletter</Title>
        <Desc>
          Welcome to our monthly newsletter! In each issue, we will bring you
          the latest updates on our products and services, industry news, and
          special offers
        </Desc>
        <InputContainer />
        <Button>Subscribe Now</Button>
      </InfoContainer>
    </Container>
  );
};

export default Newsletter;
