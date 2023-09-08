/* 
The code represents a  Container  component that serves as a container to wrap content within a specified width. 
 
The component imports the  FC  (FunctionComponent) type from React and the  classNames  utility. 
 
The  Container  component is defined as a functional component that takes in props of type  ContainerProps . The  ContainerProps  type includes an optional  className  property for additional CSS classes and a required  children  property for the content to be wrapped within the container. 
 
Inside the component, a  div  element is rendered with a className that combines the default classes "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" with the provided  className  prop. 
 
The  children  prop is rendered within the  div  element. 
 
Overall, this component provides a flexible container that can be used to wrap content with a specified width and additional CSS classes if needed.
*/

import { FC } from "react";
import classNames from "classnames";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Container component represents a container to wrap content within a specified width.
 * @module Container
 * @param {Object} props - The component props.
 * @param {string} [props.className] - The additional CSS class for the container.
 * @param {React.ReactNode} props.children - The content to be wrapped within the container.
 * @returns {JSX.Element} The Container component.
 */
const Container: FC<ContainerProps> = ({
  children,
  className,
}): JSX.Element => {
  return (
    <div
      className={classNames(
        "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
