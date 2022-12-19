import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  padding: 2px 0;
  background-color: #1c226b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
`;

const Sale = () => {
  return (
    <div>
      <Container>
        Flash sale - everything on our site is 25% off. Hurry - this sale won't
        last long! Shop now and save big
      </Container>
    </div>
  );
};

export default Sale;
