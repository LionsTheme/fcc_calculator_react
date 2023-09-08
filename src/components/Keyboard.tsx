import { FC } from "react";
import classNames from "classnames";
import { CalcType } from "../types/CalcTypes";
import Key from "./Key";
import {
  DivideIcon,
  MinusIcon,
  PlusIcon,
  PorcentIcon,
  XmarkIcon,
} from "./Icons";

type KeyboardProps = {
  className?: string;
  calcData: CalcType[];
  handleInput: (value: string | number) => void;
  handleClear?: () => void;
  handleCalculate?: () => void;
};

// Componente secundario para mostrar los botones de la calculadora
const Keyboard: FC<KeyboardProps> = ({
  className,
  calcData,
  handleInput,
  handleClear,
  handleCalculate,
}) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-4 justify-items-center gap-y-4 w-full",
        className
      )}
    >
      {calcData.map((key) => (
        <Key
          key={key.id}
          className={classNames(
            key.classname,
            "btn btn-circle",
            [key.classname === "operator" && "btn-info"],
            [key.classname === "number" && "btn-secondary"],
            [key.classname === "clear-operator" && "btn-error"],
            [key.id === "zero" && "col-span-2 w-11/12"],
            [key.id === "equals" && "row-span-2 h-auto btn-accent"]
          )}
          keyData={key}
          handleInput={handleInput}
        >
          {(key.id === "clear" && key.value) ||
            (key.classname === "number" && key.value.toString()) ||
            (key.id === "add" && <PlusIcon />) ||
            (key.id === "subtract" && <MinusIcon />) ||
            (key.id === "multiply" && <XmarkIcon />) ||
            (key.id === "divide" && <DivideIcon />) ||
            (key.id === "porcent" && <PorcentIcon />) ||
            (key.id === "equals" && key.value)}
        </Key>
      ))}
    </div>
  );
};

export default Keyboard;
