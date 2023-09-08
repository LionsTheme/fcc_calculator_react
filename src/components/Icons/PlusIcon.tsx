import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

const PlusIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    width="1em"
    viewBox="0 0 448 512"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
  </svg>
);
const ForwardRef = forwardRef(PlusIcon);
export default ForwardRef;
