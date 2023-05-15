import { FC, memo, useEffect, useRef } from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import cx from "classnames";

interface MenuProps {
  options: { key: string; value: string }[];
  setOption: (key: string) => void;
  selected: string;
  setOpen: (x: boolean) => void;
  className?:string
}

const Menu: FC<MenuProps> = ({ options, setOption, selected, setOpen,className }) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={"absolute top-[60px] shadow-xl right-[10px] h-fit w-fit bg-white z-10 rounded-md p-3 flex flex-col gap-1 "+className}
    >
      <BsFillTriangleFill className="absolute -top-[12px] right-[30px] text-white" />
      {options.map((opt,index) => (
        <h1
        key={index}
          onClick={() => {            
            setOption(opt.key);
            setOpen(false);
          }}
          className={cx(
            "h-12 w-40 cursor-pointer text-lg font-semibold  flex items-center justify-center",
            { "bg-[#d3f7ff]": selected === opt.key }
          )}
        >
          {opt.value}
        </h1>
      ))}
    </div>
  );
};

export default memo(Menu);
