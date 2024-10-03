import * as React from "react";
import { SVGProps } from "react";

export default function ArrowTopRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100%",
      }}
      preserveAspectRatio="xMidYMid meet"
      {...props}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12.2965 3.0468L3.45312 12.705"
        stroke="#C71425"
        strokeWidth="1.22768"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.552 8.82862C12.552 8.82862 13.0927 3.77515 12.2973 3.0469C11.502 2.31865 6.51562 3.30157 6.51562 3.30157"
        stroke="#C71425"
        strokeWidth="1.22768"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
