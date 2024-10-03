import React from "react";
import EnglandFlagIcon from "../icon/england-flag";
import ChevronDownIcon from "../icon/chevron-down";

export default function CountrySelect() {
  return (
    <div className="relative">
      <div className="flex gap-x-1">
        <span className="flex w-4 h-3">
          <EnglandFlagIcon />
        </span>
        <span className="flex items-center w-4 h-4">
          <ChevronDownIcon />
        </span>
      </div>
    </div>
  );
}
