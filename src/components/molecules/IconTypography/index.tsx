import { Typography, TypographyProps } from "../../atoms/Typography";
import { Img, ImgProps } from "../../atoms/Image";

export const IconTypography = ({
  element,
  children,
  className,
  src,
  alt,
}: TypographyProps & ImgProps) => {
  return (
    <>
      <div className="flex flex-row text-lg font-montserrat gap-4 align-center">
        <Img src={src} alt={alt} />
        <Typography
          element={element}
          children={children}
          className={className}
        />
      </div>
    </>
  );
};
