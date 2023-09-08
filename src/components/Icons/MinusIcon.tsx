import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

const MinusIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    viewBox="0 0 448 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M432 256c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h352c17.7 0 32 14.3 32 32z" />
  </svg>
);
const ForwardRef = forwardRef(MinusIcon);
export default ForwardRef;
