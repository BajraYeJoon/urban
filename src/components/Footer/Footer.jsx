import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import HomeIcon from "@mui/icons-material/Home";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #320764;
  color: white;
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
  margin-top: 15px;
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
          Where urban style meets convenience. Stay fresh, stay urban.
        </Desc>
        <SocialContainer>
          <SocialIcon color="black">
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon color="black">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="black">
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
          Bhaktapur, Nepal, 44800
        </SubContact>
        <SubContact>
          <SmartphoneIcon style={{ marginRight: "10px" }} />
          +977-9860756619
        </SubContact>
        <SubContact>
          <EmailIcon style={{ marginRight: "10px" }} />
          binaya.bajrashakya@gmail.com
        </SubContact>
        <Payment src="" />
      </Right>
    </Container>
  );
};

export default Footer;
