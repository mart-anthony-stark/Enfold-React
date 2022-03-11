import { FC } from "react";
import { EnfoldProps } from "./Enfold.types";

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
  return (
    <div
      id="enfold"
      style={{
        animationDuration: options.duration,
        animationTimingFunction: options.easing,
        animationDelay: options.delay,
      }}
    ></div>
  );
};

export default Enfold;
