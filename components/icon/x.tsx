import * as React from "react";
import { SVGProps } from "react";

export default function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      preserveAspectRatio="xMidYMid meet"
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      className="group-hover:fill-white fill-[#AD131F]"
    >
      <mask
        id="mask0_4302_568"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <path d="M0 0H20V20H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_4302_568)">
        <path d="M15.75 0.9375H18.8171L12.1171 8.61464L20 19.0632H13.8286L8.99143 12.7275L3.46286 19.0632H0.392857L7.55857 10.8489L0 0.938929H6.32857L10.6943 6.72893L15.75 0.9375ZM14.6714 17.2232H16.3714L5.4 2.68179H3.57714L14.6714 17.2232Z" />
      </g>
    </svg>
  );
}
