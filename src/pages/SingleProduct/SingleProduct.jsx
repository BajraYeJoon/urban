import styled from "styled-components";
import { Footer, Navbar, Newsletter, Sale } from "../../components";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Container = styled.div``;
const ProductWrapper = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 3rem;
`;
const Title = styled.h2`
  font-weight: 400;
`;
const Desc = styled.p`
  margin: 2rem 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 3rem;
`;

const FilterContainer = styled.div`
  width: 60%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const TitleFilter = styled.span`
  font-size: 20px;
  font-weight: 400;
`;
const ColorFilter = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSizeSelect = styled.select`
  margin-left: 9px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  margin-top: 2rem;
`;
const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 9px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 5px 1rem;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s ease-out;
  }
`;

const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Sale />

      <ProductWrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1671418285899-58fb1471c038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </ImgContainer>

        <InfoContainer>
          <Title>iajdif</Title>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            repellat tempora, hic commodi eaque impedit beatae nesciunt minima
            ea praesentium?
          </Desc>
          <Price>140.2</Price>

          <FilterContainer>
            <Filter>
              <TitleFilter>Color</TitleFilter>
              <ColorFilter color="black" />
              <ColorFilter color="blue" />

              <ColorFilter color="red" />
            </Filter>
            <Filter>
              <TitleFilter>Size</TitleFilter>

              <FilterSizeSelect>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
              </FilterSizeSelect>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountWrapper>
              <RemoveCircleOutlineIcon />
              <Amount>1</Amount>
              <AddCircleOutlineIcon />
            </AmountWrapper>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </ProductWrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
