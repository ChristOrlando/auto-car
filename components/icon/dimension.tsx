import * as React from "react";
import { SVGProps } from "react";

export default function DimensionIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M11.4049 3.75543H0.795702C0.35617 3.75543 0 4.11154 0 4.5511V15.1603C0 15.5998 0.35617 15.956 0.795702 15.956H11.4049C11.8444 15.956 12.2006 15.5998 12.2006 15.1603V4.5511C12.2006 4.11154 11.8444 3.75543 11.4049 3.75543ZM10.6092 14.3646H1.59137V5.34677H10.6092V14.3646ZM15.8423 13.386H14.9792V4.09988H15.8423C15.8734 4.0999 15.9039 4.09065 15.9298 4.07332C15.9558 4.05599 15.9759 4.03135 15.9878 4.00253C15.9999 3.97371 16.003 3.94196 15.9969 3.91133C15.9909 3.8807 15.9758 3.85258 15.9536 3.83056L14.5604 2.43733C14.5458 2.42267 14.5284 2.41104 14.5092 2.4031C14.4901 2.39517 14.4695 2.39109 14.4488 2.39109C14.4281 2.39109 14.4075 2.39517 14.3884 2.4031C14.3692 2.41104 14.3518 2.42267 14.3372 2.43733L12.9439 3.83056C12.9218 3.85258 12.9067 3.8807 12.9006 3.91133C12.8945 3.94196 12.8977 3.97371 12.9097 4.00253C12.9216 4.03134 12.9418 4.05598 12.9678 4.07331C12.9937 4.09065 13.0242 4.09989 13.0553 4.09988H13.9184V13.386H13.0553C13.0242 13.386 12.9937 13.3953 12.9677 13.4126C12.9418 13.4299 12.9216 13.4546 12.9097 13.4834C12.8977 13.5122 12.8945 13.544 12.9006 13.5746C12.9067 13.6053 12.9218 13.6334 12.9439 13.6554L14.3372 15.0487C14.3518 15.0633 14.3692 15.075 14.3884 15.0829C14.4075 15.0908 14.4281 15.0949 14.4488 15.0949C14.4695 15.0949 14.4901 15.0908 14.5092 15.0829C14.5284 15.075 14.5458 15.0633 14.5604 15.0487L15.9536 13.6554C15.9758 13.6334 15.9909 13.6053 15.997 13.5746C16.0031 13.544 15.9999 13.5122 15.9878 13.4834C15.9759 13.4546 15.9558 13.4299 15.9298 13.4126C15.9039 13.3953 15.8734 13.386 15.8423 13.386ZM2.30055 3.05608C2.32258 3.07822 2.35071 3.09329 2.38134 3.09938C2.41198 3.10547 2.44373 3.10229 2.47255 3.09026C2.50138 3.07838 2.52604 3.0582 2.54338 3.03228C2.56072 3.00636 2.56996 2.97588 2.56994 2.94469V2.08168H11.8561V2.94469C11.8561 2.97587 11.8653 3.00636 11.8827 3.03228C11.9 3.05819 11.9246 3.07838 11.9535 3.09026C11.9823 3.10229 12.014 3.10547 12.0447 3.09938C12.0753 3.09329 12.1034 3.07822 12.1255 3.05608L13.5187 1.66285C13.5483 1.63323 13.5649 1.59307 13.5649 1.5512C13.5649 1.50932 13.5483 1.46916 13.5187 1.43955L12.1255 0.0463466C12.1034 0.0241971 12.0753 0.00911287 12.0447 0.00301946C12.014 -0.00307395 11.9823 9.98878e-05 11.9535 0.0121358C11.9246 0.0240233 11.9 0.0442062 11.8827 0.0701233C11.8653 0.0960404 11.8561 0.126523 11.8561 0.157703V1.02078H2.56994V0.157703C2.56996 0.126519 2.56071 0.096034 2.54337 0.0701165C2.52603 0.044199 2.50138 0.0240182 2.47255 0.0121358C2.44373 9.98878e-05 2.41197 -0.00307395 2.38134 0.00301946C2.3507 0.00911287 2.32258 0.0241971 2.30055 0.0463466L0.907351 1.43955C0.877741 1.46916 0.861107 1.50932 0.861107 1.5512C0.861107 1.59307 0.877741 1.63323 0.907351 1.66285L2.30055 3.05608Z"
        fill="#CB444E"
      />
    </svg>
  );
}
