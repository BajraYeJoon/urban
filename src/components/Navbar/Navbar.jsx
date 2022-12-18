import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Badge } from "@mui/material";
import { fontSize } from "@mui/system";

//MAIN CONTAINER
const Container = styled.div`
  height: 50px;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Wrapper = styled.div`
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

const SubNav = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 1.75rem;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 600;
`;

const GlobalLanguage = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-right: 1rem;
`;

const Navbar = () => {
  return (
    // Main container
    <Container>
      {/* Navbar wrapper container */}
      <Wrapper>
        {/*  */}
        <Left>
          <GlobalLanguage>EN</GlobalLanguage>
          <SearchContainer>
            <Input />
            <SearchOutlinedIcon style={{ color: "black", fontSize: "16" }} />
          </SearchContainer>
        </Left>
        {/*  */}
        <Center>
          <Logo>Urban</Logo>
        </Center>
        {/*  */}
        <Right>
          <SubNav>
            <Badge color="secondary" badgeContent={4}>
              <ShoppingCartRoundedIcon />
            </Badge>
          </SubNav>
          <SubNav>Sign In</SubNav>
          <SubNav>Register</SubNav>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
