import { FC } from "react";
import classNames from "classnames";
import { FccLogo } from "./Icons";

type HeaderProps = {
  className?: string;
};

/**
 * Header component represents the header section of the page.
 *
 * @description The code represents the  Header  component, which represents the header section of the page.
 *
 * The component imports the  FC  (FunctionComponent) type from React and the  classNames  utility.
 *
 * The  Header  component is defined as a functional component that takes in props of type  HeaderProps . The  HeaderProps  type includes an optional  className  property for additional CSS classes.
 *
 * @module Header
 * @param {Object} props - The component props.
 * @param {string} [props.className] - The additional CSS class for the header.
 * @returns {JSX.Element} The Header component.
 */
const Header: FC<HeaderProps> = ({ className }): JSX.Element => {
  return (
    <header
      className={classNames(
        "flex items-end text-primary-content prose-h1:text-xs prose-h1:font-medium gap-1",
        className
      )}
    >
      <FccLogo className="h-5 w-5" />
      <h1 className="mb-0 text-current">FCC JavaScript Calculator</h1>
    </header>
  );
};

export default Header;
