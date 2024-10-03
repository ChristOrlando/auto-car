import * as React from "react";
import { SVGProps } from "react";

export default function ChevronDownDarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      preserveAspectRatio="xMidYMid meet"
      {...props}
      viewBox="0 0 24 24"
    >
      <path
        d="M17.8164 9.00005C17.8164 9.00005 13.3975 15 11.8164 15C10.2352 15 5.81641 9 5.81641 9"
        stroke="#1D1F2C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
