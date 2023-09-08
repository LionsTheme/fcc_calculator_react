/* 
The code represents the  Footer  component, which represents the footer section of the page. 
*/

import { FC } from "react";
import classNames from "classnames";

type FooterProps = {
  className?: string;
};

/**
 * Footer component represents the footer section of the page.
 * @module Footer
 * @param {Object} props - The component props.
 * @param {string} [props.className] - The additional CSS class for the footer.
 * @returns {JSX.Element} The Footer component.
 */
const Footer: FC<FooterProps> = ({ className }): JSX.Element => {
  return (
    <footer
      className={classNames(
        "flex items-center justify-center text-secondary-content text-xs font-light not-prose bg-secondary rounded-xl px-2 py-1",
        className
      )}
    >
      <p>
        {"©2023 "}
        <a
          className="link link-hover"
          href="https://www.freecodecamp.org/leoneljrm"
        >
          @leoneljrm
        </a>
      </p>
    </footer>
  );
};

export default Footer;
