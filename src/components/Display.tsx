import classNames from "classnames";
import { FC } from "react";

type DisplayProps = {
  className?: string;
  input: string;
  result: string | number | null;
};

const Display: FC<DisplayProps> = ({ className, input, result }) => {
  return (
    <div
      className={classNames(
        "bg-gray-100 p-4 text-right w-full rounded-md overflow-hidden",
        className
      )}
    >
      <div className="mb-2 h-7">{result}</div>
      <div id="display" className="text-2xl h-8 font-bold overflow-hidden">
        {input}
      </div>
    </div>
  );
};

export default Display;
