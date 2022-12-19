import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Title } from "@mui/icons-material";

import HomeIcon from "@mui/icons-material/Home";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  color: white;
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  margin-right: 1rem;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Heading = styled.h1`
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 8px;
`;

const Right = styled.div`
  flex: 1;
`;

const SubContact = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3px;
`;
const Payment = styled.img``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Urban</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          consequuntur nemo perferendis vitae dolore saepe.
        </Desc>
        <SocialContainer>
          <SocialIcon color="red">
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon color="gray">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="green">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Heading>Links</Heading>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>My Account</ListItem>
        </List>
      </Center>
      <Right>
        <Heading>Contact</Heading>
        <SubContact>
          <HomeIcon style={{ marginRight: "10px" }} />
          address
        </SubContact>
        <SubContact>
          <SmartphoneIcon style={{ marginRight: "10px" }} />
          phone number
        </SubContact>
        <SubContact>
          <EmailIcon style={{ marginRight: "10px" }} />
          Email
        </SubContact>
        <Payment src="" />
      </Right>
    </Container>
  );
};

export default Footer;
