import { FC } from "react";
import { CalcType } from "../types/CalcTypes";
import classNames from "classnames";

type KeyProps = {
  className?: string;
  children: React.ReactNode;
  keyData: CalcType;
  handleInput: (value: string | number) => void;
};

const Key: FC<KeyProps> = ({ className, children, keyData, handleInput }) => {
  const { id, value } = keyData;

  return (
    <button
      id={id}
      className={classNames("", className)}
      onClick={() => handleInput(value)}
    >
      {children}
    </button>
  );
};

export default Key;
