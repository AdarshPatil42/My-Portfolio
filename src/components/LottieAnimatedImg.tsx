import React from "react";
import Lottie from "lottie-react";

interface LottieAnimatedImgProps {
  animationData: unknown;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

const LottieAnimatedImg: React.FC<LottieAnimatedImgProps> = ({
  animationData,
  width = "100%",
  height = "100%",
  style,
}) => {
  return (
    <Lottie
      animationData={animationData}
      style={{
        width: width,
        height: height,
        ...style,
      }}
      loop={true}
      autoplay={true}
    />
  );
};

export default LottieAnimatedImg;
