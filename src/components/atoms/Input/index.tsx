export interface InputProps {
  type: "text" | "password" | "email";
  className?: string;
  placeholder?: string;
}

export const Input = ({
  type = "text",
  placeholder,
  className,
}: InputProps) => {
  return <input type={type} className={className} placeholder={placeholder} />;
};
