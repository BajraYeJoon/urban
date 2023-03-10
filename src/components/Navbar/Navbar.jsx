import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Badge } from "@mui/material";
import { responsive } from "../../constants";
import { useSelector } from "react-redux";

//MAIN CONTAINER
const Container = styled.div`
  height: 50px;
  ${responsive.mobile({ height: "50px" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${responsive.mobile({ width: "50px" })}
`;

const Wrapper = styled.div`
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${responsive.mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${responsive.mobile({ flex: "2", justifyContent: "center" })}
`;

const SubNav = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 1.75rem;
  ${responsive.mobile({ fontSize: "12px", marginLeft: " 5px;" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 600;
  ${responsive.mobile({ fontSize: "25px" })}
`;

const GlobalLanguage = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-right: 1rem;
  ${responsive.mobile({ display: "none" })}
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const Navbar = () => {
  const cart = useSelector((state) => state.cart.quantity);

  return (
    // Main container
    <Container>
      {/* Navbar wrapper container */}
      <Wrapper>
        {/*  */}
        <Left>
          <GlobalLanguage>EN</GlobalLanguage>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchOutlinedIcon style={{ color: "black", fontSize: "16" }} />
          </SearchContainer>
        </Left>
        {/*  */}
        <Center>
          <Link href="/">
            <Logo>Urban</Logo>
          </Link>
        </Center>
        {/*  */}
        <Right>
          <Link href="/cart">
            <SubNav>
              <Badge color="secondary" badgeContent={cart}>
                <ShoppingCartRoundedIcon />
              </Badge>
            </SubNav>
          </Link>

          <Link href="/login">
            <SubNav>Sign In</SubNav>
          </Link>

          <Link href="/register">
            <SubNav>Register</SubNav>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
