import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  transition: all 0.5s ease;
  opacity: 0;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 30%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: #d0c3c3;

    transform: scale(1.1);
  }
`;

const Product = ({ product }) => {
  return (
    <Container>
      <Circle />
      <Image src={product.img} />
      <Info>
        <Icon>
          <ShoppingCartRoundedIcon />
        </Icon>

        <Icon>
          <Link to={`/product/${product.id}`}>
            <SearchOutlined />
          </Link>
        </Icon>

        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
