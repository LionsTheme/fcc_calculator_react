import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

const PorcentIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    viewBox="0 0 384 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128a64 64 0 1 0-128 0 64 64 0 1 0 128 0zm256 256a64 64 0 1 0-128 0 64 64 0 1 0 128 0z" />
  </svg>
);
const ForwardRef = forwardRef(PorcentIcon);
export default ForwardRef;
