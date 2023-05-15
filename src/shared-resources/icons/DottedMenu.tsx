import { FC, memo } from "react";
import { HiDotsVertical } from "react-icons/hi";
import cx from "classnames";

interface DottedMenuProps {
  setOpen: (x: boolean) => void;
  open: boolean;
  className?:string
}

const DottedMenu: FC<DottedMenuProps> = ({ setOpen, open ,className}) => {
  return (
    <HiDotsVertical
      onClick={() => {
        setOpen(true);
      }}
      className={cx(
        "absolute h-5 w-5 text-[#1A66FF] cursor-pointer "+className,
        { "cursor-none pointer-events-none": open }
      )}
    />
  );
};

export default memo(DottedMenu);
