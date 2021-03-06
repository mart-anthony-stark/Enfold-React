import { FC } from "react";
import { EnfoldProps } from "./Enfold.types";
import "../styles/main.css";
// import injectStyle from "./InjectStyle";

const Enfold: FC<EnfoldProps> = ({
  name,
  children,
  options = {
    delay: "0s",
    easing: "ease",
    duration: "1s",
    intensity: "",
    threshold: 0.3,
  },
}) => {
  const animations = keyframes({ intensity: options.intensity });
  // injectStyle(keyframes);
  return (
    <div
      id="enfold"
      style={{
        animationDuration: options.duration,
        animationTimingFunction: options.easing,
        animationDelay: options.delay,
      }}
      className={name}
    >
      {children}
    </div>
  );
};

const keyframes = (options: any) => {
  return `@keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeLeft {
    0% {
      transform: translateX(30px);
      /* transform: translateX(${options.intensity}); */
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  @keyframes fadeRight {
    0% {
      transform: translateX(-30px);
      /* transform: translateX(-${options.intensity}); */
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  @keyframes slideUp {
    0% {
      transform: translateY(30px);
      /* transform: translateY(${options.intensity}); */
    }
    100% {
      transform: translateY(0px);
    }
  }
  @keyframes slideLeft {
    0% {
      transform: translateX(30px);
      /* transform: translateX(${options.intensity}); */
    }
    100% {
      transform: translateX(0px);
    }
  }
  @keyframes slideRight {
    0% {
      transform: translateX(-30px);
      /* transform: translateX(-${options.intensity}); */
    }
    100% {
      transform: translateX(0px);
    }
  }
  @keyframes slideDown {
    0% {
      transform: translateY(-30px);
      /* transform: translateY(-${options.intensity}); */
    }
    100% {
      transform: translateY(0px);
    }
  }
  @keyframes zoomIn {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes zoomInLeft {
    0% {
      transform: translateX(30px px) scale(0.5);
      /* transform: translateX(${options.intensity}) scale(0.5); */
    }
    100% {
      transform: translateX(0px) scale(1);
    }
  }
  @keyframes zoomInRight {
    0% {
      transform: translateX(30px px) scale(0.5);
      /* transform: translateX(${options.intensity}) scale(0.5); */
    }
    100% {
      transform: translateX(0px) scale(1);
    }
  }
  @keyframes rotateCenter {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotateBotLeft {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
      -webkit-transform-origin: bottom left;
      transform-origin: bottom left;
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
      -webkit-transform-origin: bottom left;
      transform-origin: bottom left;
    }
  }
  @keyframes rotateVertical {
    0% {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
    }
    100% {
      -webkit-transform: rotateY(360deg);
      transform: rotateY(360deg);
    }
  }
  @keyframes rotateDiagonal {
    0% {
      -webkit-transform: rotate3d(-1, 1, 0, 0deg);
      transform: rotate3d(-1, 1, 0, 0deg);
      -webkit-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }
    50% {
      -webkit-transform: rotate3d(-1, 1, 0, -180deg);
      transform: rotate3d(-1, 1, 0, -180deg);
      -webkit-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }
    100% {
      -webkit-transform: rotate3d(-1, 1, 0, -360deg);
      transform: rotate3d(-1, 1, 0, -360deg);
      -webkit-transform-origin: 100% 100%;
      transform-origin: 100% 100%;
    }
  }
  @keyframes flipHorizontalBottom {
    0% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
    }
    100% {
      -webkit-transform: rotateX(-180deg);
      transform: rotateX(-180deg);
    }
  }
  @keyframes flipScaleUpHor {
    0% {
      -webkit-transform: scale(1) rotateX(0);
      transform: scale(1) rotateX(0);
    }
    50% {
      -webkit-transform: scale(2.5) rotateX(-90deg);
      transform: scale(2.5) rotateX(-90deg);
    }
    100% {
      -webkit-transform: scale(1) rotateX(-180deg);
      transform: scale(1) rotateX(-180deg);
    }
  }
  @keyframes slideRotateTopHor {
    0% {
      -webkit-transform: translateY(0) rotateX(0deg);
      transform: translateY(0) rotateX(0deg);
    }
    100% {
      -webkit-transform: translateY(-150px) rotateX(-90deg);
      transform: translateY(-150px) rotateX(-90deg);
    }
  }
  @keyframes slideRotateHorBottom {
    0% {
      -webkit-transform: translateY(0) rotateX(0deg);
      transform: translateY(0) rotateX(0deg);
    }
    100% {
      -webkit-transform: translateY(150px) rotateX(90deg);
      transform: translateY(150px) rotateX(90deg);
    }
  }
  @keyframes shadowDropCenter {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.85);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.85);
    }
  }
  @keyframes shadowDropTB {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.85),
        0 12px 20px -12px rgba(0, 0, 0, 0.85);
      box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.85),
        0 12px 20px -12px rgba(0, 0, 0, 0.85);
    }
  }
  @keyframes shadowDropLR {
    0% {
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.85),
        12px 0 20px -12px rgba(0, 0, 0, 0.85);
      box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.85),
        12px 0 20px -12px rgba(0, 0, 0, 0.85);
    }
  }
  @keyframes shadowDrop2Center {
    0% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
      -webkit-transform: translateZ(50px);
      transform: translateZ(50px);
      -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.85);
      box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.85);
    }
  }`;
};

export default Enfold;
