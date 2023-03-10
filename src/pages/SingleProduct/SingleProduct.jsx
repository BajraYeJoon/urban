import styled from "styled-components";
import { Footer, Navbar, Newsletter, Sale } from "../../components";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useEffect, useState } from "react";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import axios from "axios";

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
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ quantity }));
  };

  return (
    <Container>
      <Navbar />
      <Sale />

      <ProductWrapper>
        <ImgContainer>
          <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
        </ImgContainer>

        <InfoContainer>
          <Title>Grayish Cap For Men</Title>
          <Desc>
            Cap for Summer | With a cool looking design and fiber material, Be
            Cool. Check out the sale for more discount.
          </Desc>
          <Price>$12.99</Price>

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
              <RemoveCircleOutlineIcon onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <AddCircleOutlineIcon onClick={() => handleQuantity("inc")} />
            </AmountWrapper>
            <Button onClick={handleClick}>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </ProductWrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
