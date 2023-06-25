import { ReactNode } from "react";

export interface TypographyProps {
  element: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Typography = ({
  element,
  className,
  children,
}: TypographyProps) => {
  const Element = element as keyof JSX.IntrinsicElements;
  return <Element className={className}>{children}</Element>;
};
