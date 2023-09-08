import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

const EqualsIcon = (
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
    <path d="M48 128c-17.7 0-32 14.3-32 32s14.3 32 32 32h352c17.7 0 32-14.3 32-32s-14.3-32-32-32H48zm0 192c-17.7 0-32 14.3-32 32s14.3 32 32 32h352c17.7 0 32-14.3 32-32s-14.3-32-32-32H48z" />
  </svg>
);
const ForwardRef = forwardRef(EqualsIcon);
export default ForwardRef;
