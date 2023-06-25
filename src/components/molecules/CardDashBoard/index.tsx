import { ReactNode } from "react";
import { Img, ImgProps } from "../../atoms/Image";
import { Typography, TypographyProps } from "../../atoms/Typography";

interface CardDashBoardProps
  extends ImgProps,
    Omit<TypographyProps, "element" | "children"> {
  firstele: ReactNode;
  firstchild: ReactNode;
  firstclass?: string;
  secondele: ReactNode;
  secondchild: ReactNode;
  secondclass?: string;
  cardclass: string;
}

export const CardDashBoard = (props: CardDashBoardProps) => {
  const {
    src,
    alt,
    firstele,
    firstchild,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    firstclass,
    secondele,
    secondchild,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    secondclass,
    cardclass,
  } = props;

  return (
    <div className={`flex flex-col gap-3 w-1/4 rounded-2xl p-4 ${cardclass}`}>
      <div className="self-end">
        <Img src={src} alt={alt} />
      </div>
      <div className="">
        <Typography
          element={firstele}
          className=" text-sm font-lato  text-black font-normal mb-1"
          children={firstchild}
        />
        <Typography
          element={secondele}
          children={secondchild}
          className="font-bold text-2xl"
        />
      </div>
    </div>
  );
};
