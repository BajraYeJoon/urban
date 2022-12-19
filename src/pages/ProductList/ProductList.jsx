import styled from "styled-components";
import { Footer, Navbar, Newsletter, Products, Sale } from "../../components";

const Container = styled.div``;

const Title = styled.h2`
  margin: 0.75rem;
`;

const FilterProducts = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListFilter = styled.div`
  margin: 0.75rem;
`;

const TextFilter = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 8px;
  margin-right: 15px;
  margin-left: 8px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Sale />
      <Title>Dresses</Title>
      <FilterProducts>
        <ListFilter>
          <TextFilter>Filter Products:</TextFilter>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
          </Select>

          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>s</Option>
            <Option>M</Option>
            <Option>L</Option>
          </Select>
        </ListFilter>
        <ListFilter>
          <TextFilter>Sort Products:</TextFilter>
          <Select>
            <Option>Newest</Option>
            <Option>Oldest</Option>
            <Option>Popular</Option>
          </Select>
        </ListFilter>
      </FilterProducts>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
