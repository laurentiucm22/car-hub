"use client";
import { FC } from "react";
import { CustomeButtonProps } from "@/types";

const CustomeButtom: FC<CustomeButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomeButtom;
