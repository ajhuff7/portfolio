import React from "react";
import styled from "@emotion/styled";
import { Spring } from "react-spring/renderprops";
import { withGesture } from "react-with-gesture";
import  './style.css';


const SlideContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 100%;
  margin-left: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
`;

const SlideCard = styled.div`
  position: relative;
  max-width: 100%;
  min-width: 30%;
  width: 100vw;
  height: 100%;
  background: ##0000001e;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
  border-radius: 8px;
  
`;




function Slide({
  content,
  link,
  name,
  description,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  up
}) {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));


  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  return (
    <Spring
      to={{
        transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
        top: `${
          offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
        }%`,
        opacity: distanceFactor * distanceFactor
      }}
      config={animationConfig}
    >
      {style => (
        <SlideContainer
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2)
          }}
        >
          <SlideCard onClick={() => moveSlide(offsetFromMiddle)}>
          <div className="container" >
          <a href={link}><h4 id="proCard">{name}</h4></a>
          <img src={content} alt={name} id="proImg"/>  
          </div>
          &nbsp;&nbsp;
          <div className="container" id="description">
          <h3 id="descriptionTitle"> Project Description</h3>
          <p>{description}</p>
          </div>
          </SlideCard>
        </SlideContainer>
      )}
    </Spring>
  );
}

export default withGesture()(Slide);
