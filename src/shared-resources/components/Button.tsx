import { FC, memo } from "react";
import cn from "classnames";
type ButtonProps = {
  text: string;
  onClick: () => void;
  clicked?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button: FC<ButtonProps> = ({ text, onClick, clicked, type }) => {
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
      type={type}
    >
      {text}
    </button>
  );
};


export default memo(Button);
