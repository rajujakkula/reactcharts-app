import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  handleClick?: () => void;
}

export const Button = ({ className, children }: ButtonProps) => {
  return <button className={className}>{children}</button>;
};
