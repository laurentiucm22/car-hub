"use client";

import { FC } from "react";
import { CustomeButtonProps } from "@/types";
import Image from "next/image";

const CustomeButtom: FC<CustomeButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain rounded-full"
          />
        </div>
      )}
    </button>
  );
};

export default CustomeButtom;
