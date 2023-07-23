import { ReactEventHandler } from "react";

export interface CustomeButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: ReactEventHandler<HTMLButtonElement>;
}
