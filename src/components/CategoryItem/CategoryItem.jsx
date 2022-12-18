import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  min-width: 30%;
  flex: 1 1 auto;
  margin: 3px;
  height: 50vh;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${Image} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h2`
  color: white;
  margin-bottom: 15px;
`;
const Button = styled.button`
  border: none;
  padding: 0.75rem 2rem;
  font-size: 20px;
  background-color: white;
  color: gray;
  cursor:  pointer;
  font-weight: 300;
}

.app__navbar-links li:hover {
  color: var(--color-grey);
}

.app__navbar-login {
    display: flex
`;

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Image src={category.img} />
      <Info>
        <Title>{category.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
