import { useState } from "react";
import React from "react";

import styled from "styled-components";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

import { data, responsive } from "../../constants";

//main container
const Container = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;
  ${responsive.mobile({ height: "60vh" })}
`;

//carousel container
const Arrow = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

//container for images slide
const SlideContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transition: all 0.8s ease;
  transform: translateX(${(props) => props.slider * -100}vw);
`;

//container for individual slide
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0rem 5rem;
  background-color: #${(props) => props.bg};
`;

//Image wrapper
const ImgWrapper = styled.div`
  height: 100%;
  width: 100vw;
  flex: 1;
  ${responsive.mobile({ display: "none" })}
`;

const Image = styled.img`
  margin: 1rem 5rem;
  height: 90%;
`;

//Infos for images
const ContentContainer = styled.div`
  margin-right: 50px;
  flex: 1;
  ${responsive.mobile({
    display: "flex",
    flexDirection: "column",
    fontSize: "15px",
    padding: "0",
    justifyContent: "center",
    alignItems: "center",
  })}
`;

const Heading = styled.h1`
  font-size: 70px;
  ${responsive.mobile({ fontSize: "25px" })}
`;
const Desc = styled.p`
  margin: 2rem 0;
  font-size: 13px;
  display: flex;
  flex-wrap: nowrap;
  font-weight: 600;
  letter-spacing: 0.04em;
`;
const Button = styled.button`
  padding: 0.75rem 2rem;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    transition: 0.3s ease-out;
  }
`;

const Slider = () => {
  const [slider, setSlider] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlider(slider > 0 ? slider - 1 : 2);
    } else {
      setSlider(slider < 2 ? slider + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowCircleLeftOutlinedIcon />
      </Arrow>
      <SlideContainer slider={slider}>
        {data.sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgWrapper>
              <Image src={item.img} />
            </ImgWrapper>

            <ContentContainer>
              <Heading>{item.title}</Heading>
              <Desc>{item.desc}</Desc>
              <Button>Shop Now</Button>
            </ContentContainer>
          </Slide>
        ))}
      </SlideContainer>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowCircleRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
