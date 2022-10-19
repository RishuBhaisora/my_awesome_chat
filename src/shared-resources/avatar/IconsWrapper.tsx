import { FC, memo, ReactNode } from "react";

type IconsWrapperProps = {
  children: ReactNode;
  title: string;
  onClick?: () => void;
};

const IconsWrapper: FC<IconsWrapperProps> = (props) => {
  return (
    <div className="flex space-x-10 m-4 cursor-pointer" onClick={props.onClick}>
      <span className="mt-1.5"> {props.children}</span>

      <h1 className="font-semibold text-md md:text-lg">{props.title}</h1>
    </div>
  );
};

IconsWrapper.defaultProps = {};

export default memo(IconsWrapper);
