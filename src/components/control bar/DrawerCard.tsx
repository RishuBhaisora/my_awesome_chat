import React, { FC, memo } from "react";
import cx from "classnames";
interface DrawerCardProps {
  children: any;
  selected: boolean;
  onClick:()=>void
}

const DrawerCard: FC<DrawerCardProps> = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={cx("pl-[17px] pt-[7px] md:pl-0  md:pt-0 w-[51px] md:w-[129px] h-[45px] md:h-[68px] md:ml-[29px] md:rounded-l-xl  md:rounded-b-none cursor-pointer relative md:rounded-bl-xl md:mb-[10px]", {
        "md:bg-[#004BE1]": props.selected,
      })}
    >
        <div className="md:ml-[2.4rem] md:pt-[0.8rem]" >{props.children}</div>
        <span className={cx({"flex md:w-[8px] md:h-[67.5px] md:ml-[121px] md:mt-[-44.5px] h-[.4rem] w-[67px] ml-[-16.6px] mt-[-35px] bg-[#FFE81A] md:rounded-l-lg  md:rounded-b-none absolute top-[28px] left-[11px] md:top-0 md:left-0 md:relative md:rounded-bl-lg":props.selected})}></span>
      
    </div>
  );
};

export default memo(DrawerCard);
