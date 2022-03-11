import { FC } from "react";
import { EnfoldProps } from "./Enfold.types";

const Enfold: FC<EnfoldProps> = (props) => {
  return (
    <div
      id="enfold"
      style={{
        animationDuration: props.options.duration,
        animationTimingFunction: props.options.easing,
        animationDelay: props.options.delay,
      }}
    ></div>
  );
};

export default Enfold;
