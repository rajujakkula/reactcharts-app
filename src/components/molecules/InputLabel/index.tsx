import { Input } from "../../atoms/Input";
import { Typography } from "../../atoms/Typography";

import { TypographyProps } from "../../atoms/Typography";
import { InputProps } from "../../atoms/Input";

interface InputLabelProps extends TypographyProps, InputProps {
  classNameTypo?: string;
  classNameInput?: string;
}

const InputLabel = ({
  children,
  type,
  classNameInput,
  classNameTypo,
}: InputLabelProps) => {
  return (
    <>
      <Typography
        element="p"
        // className="text-base text-black font-lato"
        className={classNameTypo}
        children={children}
      />

      <Input
        type={type}
        // className="my-2 w-full p-2 bg-slate-50 text-black outline-none border-none rounded"
        className={classNameInput}
      />
    </>
  );
};

export default InputLabel;
