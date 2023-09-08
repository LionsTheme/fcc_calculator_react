import { FC } from "react";
import classNames from "classnames";

type BgImageProps = {
  className?: string;
  imgSrc: string;
};

const BgImage: FC<BgImageProps> = ({ className, imgSrc }) => {
  return (
    <div
      className={classNames(
        "fixed h-screen w-screen -z-10 overflow-hidden not-prose",
        className
      )}
    >
      <img
        className="w-screen object-cover brightness-90"
        alt="Sound images background"
        src={imgSrc}
        sizes="100vw"
      />
    </div>
  );
};

export default BgImage;
