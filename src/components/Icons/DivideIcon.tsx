import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

const DivideIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    viewBox="0 0 448 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M272 96a48 48 0 1 0-96 0 48 48 0 1 0 96 0zm0 320a48 48 0 1 0-96 0 48 48 0 1 0 96 0zm128-128c17.7 0 32-14.3 32-32s-14.3-32-32-32H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h352z" />
  </svg>
);
const ForwardRef = forwardRef(DivideIcon);
export default ForwardRef;
