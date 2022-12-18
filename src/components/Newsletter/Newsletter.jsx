import styled from "styled-components";
import { images } from "../../constants";

const Container = styled.div`
  height: 60vh;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 50%;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 50%;
  background-color: red;
  flex-direction: column;
`;
const Title = styled.h2``;
const Desc = styled.p``;
const InputContainer = styled.input``;
const Button = styled.button``;

const Newsletter = () => {
  return (
    <Container>
      <Image src={images.newsletter} />
      <InfoContainer>
        <Title>Stay Up-to-Date with Our Monthly Newsletter"</Title>
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
