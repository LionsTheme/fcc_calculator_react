import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CheckIcon = (
  {
    title = "check-icon",
    titleId = "check-icon",
    ...props
  }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-6 h-6"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
);
const ForwardRef = forwardRef(CheckIcon);
export default ForwardRef;
