import { FC, memo } from "react";
import cn from "classnames";
type ButtonProps = {
  text: string;
  onClick: () => void;
  clicked: boolean;
};

const Button: FC<ButtonProps> = ({ text, onClick, clicked }) => {
  return (
    <button
      className={cn(
        " w-1/2  text-white text-md font-bold p-2.5 ",
        { "rounded-l-md": text === "LogIn" },
        { "rounded-r-md": text === "SignUp" },
        { "bg-[#3a79f8]": clicked },
        { " bg-[#6c9bf9]": !clicked }
      )}
      disabled={clicked}
      onClick={onClick}
    >
      {text}
    </button>
  );
};


export default memo(Button);
