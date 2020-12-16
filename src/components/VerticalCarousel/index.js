import React from "react";
import styled from "@emotion/styled";
import Slide from "../../components/Slide";
import PropTypes from "prop-types";


const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const NavigationButtons = styled.div`
  position: relative;
  display: flex;
  height: 60px;
  margin: 0 auto;
  margin-bottom: 25px;
  width: 40%;
  margin-top: 1rem;
  justify-content: space-between;
  z-index: 1000;
`;

const NavBtn = styled.div`
  background: #000000c0;
  color: #b5c8fc;
  font-size: 32px;
  padding: 10px;
  margin: 0;
  margin-right: 5%;
  border-radius: 8px;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  box-shadow: 0px 0px 24px #93affa;
  -moz-box-shadow: 0px 0px 24px #93affa;
  -webkit-box-shadow: 0px 0px 24px #93affa;
  cursor: default;

`;


function mod(a, b) {
  return ((a % b) + b) % b;
}

class VerticalCarousel extends React.Component {
  state = {
    index: 0,
    goToSlide: null,
    prevPropsGoToSlide: 0,
    newSlide: false
  };

  componentDidMount = () => {
    document.addEventListener("keydown", event => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      if (event.keyCode === 38) {
        this.moveSlide(-1);
      }
      if (event.keyCode === 40) {
        this.moveSlide(1);
      }
    });
  };

  static propTypes = {
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.any,
        content: PropTypes.object
      })
    ).isRequired,
    goToSlide: PropTypes.number,
    showNavigation: PropTypes.bool,
    offsetRadius: PropTypes.number,
    animationConfig: PropTypes.object
  };

  static defaultProps = {
    offsetRadius: 2,
    animationConfig: { tension: 120, friction: 14 }
  };

  modByslidesLength = index => {
    return mod(index, this.props.slides.length);
  };

  moveSlide = direction => {
    this.setState({
      index: this.modByslidesLength(this.state.index + direction),
      goToSlide: null
    });
  };

  clampOffsetRadius(offsetRadius) {
    const { slides } = this.props;
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  }

  getPresentableslides() {
    const { slides } = this.props;
    const { index } = this.state;
    let { offsetRadius } = this.props;
    offsetRadius = this.clampOffsetRadius(offsetRadius);
    const presentableslides = [];

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableslides.push(slides[this.modByslidesLength(index + i)]);
    }

    return presentableslides;
  }

  render() {
    const { animationConfig, offsetRadius, showNavigation } = this.props;

    let navigationButtons = null;
    if (showNavigation) {
      navigationButtons = (
        <NavigationButtons>
          <NavBtn className="fas fa-angle-double-up" onClick={() => this.moveSlide(1)}></NavBtn>
          <NavBtn className="fas fa-angle-double-down" onClick={() => this.moveSlide(-1)}></NavBtn>
        </NavigationButtons>
      );
    }
    return (
      <React.Fragment>
        <Wrapper>
          {this.getPresentableslides().map((slide, presentableIndex) => (
            <Slide
              key={slide.key}
              content={slide.content}
              link={slide.link}
              name={slide.name}
              description={slide.description}
              moveSlide={this.moveSlide}
              offsetRadius={this.clampOffsetRadius(offsetRadius)}
              index={presentableIndex}
              animationConfig={animationConfig}
            />
          ))}
        </Wrapper>
        {navigationButtons}
      </React.Fragment>
    );
  }
}

export default VerticalCarousel;
