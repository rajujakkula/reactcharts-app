import { Typography } from "../../atoms/Typography";
import { Button } from "../../atoms/Button";
import { IconButton } from "../../molecules/IconButton";
import InputLabel from "../../molecules/InputLabel";

import {
  SIGN_IN_WITH_GOOGLE,
  SIGN_IN_WITH_APPLE,
  GoogleIcon,
  AppleIcon,
  SIGN_INTO_YOUR_ACCOUNT,
  SIGN_IN,
  BOARD,
  EMAIL_ADD,
  PASSWORD,
  FORGOT_PASSWORD,
  REGISTER_HERE,
} from "../../utils/constants";

export const SignIn = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="sm:basis-2/4 bg-black xs:p-24 md:p-0  text-white xs:text-3xl lg:text-7xl font-bold flex items-center justify-center lg:h-screen">
        <Typography element="h1" className="text-center" children={BOARD} />
      </div>
      <div className="sm:basis-3/4 bg-slate-100">
        <div className="flex flex-col m-auto mt-28  w-4/5 lg:w-385">
          <Typography
            element="h1"
            children={SIGN_IN}
            className="text-4xl font-bold text-black"
          />
          <Typography
            element="h2"
            className="text-base font-normal text-black my-1"
            children={SIGN_INTO_YOUR_ACCOUNT}
          />

          <div className="flex flex-row justify-between my-4">
            <IconButton
              src={GoogleIcon}
              alt={GoogleIcon}
              children={SIGN_IN_WITH_GOOGLE}
              className="px-4 py-3 xs:mr-2 lg:w-44 bg-white flex text-xs flex-row  gap-2 text-black rounded-md"
            />
            <IconButton
              src={AppleIcon}
              alt={AppleIcon}
              children={SIGN_IN_WITH_APPLE}
              className="px-4 py-3 xs:mr-2 lg:w-44 bg-white flex text-xs flex-row  gap-2 text-black rounded-md"
            />
          </div>
          <form className="bg-white w-100 flex flex-col justify-between  py-5 px-5 rounded">
            <InputLabel
              element={"p"}
              children={EMAIL_ADD}
              type={"text"}
              classNameTypo="text-base text-black font-lato"
              classNameInput="my-2 w-full p-2 bg-slate-50 text-black outline-none border-none rounded"
            />

            <InputLabel
              element="p"
              children={PASSWORD}
              type={"text"}
              classNameTypo="text-base text-black font-lato"
              classNameInput="my-2 w-full p-2 bg-slate-50 text-black outline-none border-none rounded"
            />

            <Typography
              element="p"
              children={FORGOT_PASSWORD}
              className="text-base   text-blue-600 font-base font-lato"
            />
            <Button
              children={SIGN_IN}
              className="w-full my-2 py-3 font-bold bg-black text-xs text-white text-center rounded-md"
            />
          </form>
          <Typography element="p" className="text-splate-50 my-3 self-center">
            Don't have an account?
            <Typography
              element="span"
              children={REGISTER_HERE}
              className="text-blue-500 ml-1"
            />
          </Typography>
        </div>
      </div>
    </div>
  );
};
