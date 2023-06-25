import { Button } from "../../atoms/Button";
import { Img } from "../../atoms/Image";

interface IconButtonProps {
  src: string;
  alt: string;
  children: string;
  className?: string;
  handleClick?: () => void;
}

export const IconButton = ({
  src,
  alt,
  children,
  className,
}: IconButtonProps) => {
  return (
    <Button className={className}>
      <>
        <Img src={src} alt={alt} className="my-auto" />
        {children}
      </>
    </Button>
  );
};
