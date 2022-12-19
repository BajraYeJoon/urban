import styled from "styled-components";
import { data } from "../../constants";
import CategoryItem from "../CategoryItem/CategoryItem";

const Container = styled.div`
  display: flex;
  margin-top: 1.5rem;
  padding: 40px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Categories = () => {
  return (
    <Container>
      {data.categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Container>
  );
};

export default Categories;
