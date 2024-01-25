import { FC, memo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Menu from "./Menu";
import DottedMenu from "../icons/DottedMenu";

interface CustomSearchType {
  options?: { key: string; value: string }[];
  setOption?: (key: string) => void;
  selectedOption?: string;
  onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
  value?:string
}
const CustomSearch: FC<CustomSearchType> = ({
  options,
  setOption,
  selectedOption,
  onChange,
  value
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 md:p-0 md:pb-6 md:pl-0 md:pt-0 relative">
      <FiSearch className="absolute h-5 w-5 md:top-[13px] md:left-[15px] top-[29px] left-[30px]" />
      {options?.length && selectedOption && (
        <>
          <DottedMenu
            setOpen={setOpen}
            open={open}
            className="top-[13px] right-[15px]"
          />
          {open && (
            <Menu
              options={options}
              setOpen={setOpen}
              setOption={setOption as any}
              selected={selectedOption as string}
            />
          )}
        </>
      )}

      <input
        onChange={onChange}
        value={value}
        placeholder="Search"
        className=" outline-none w-full h-[45px] bottom-shadow pr-[45px] pl-[55px] rounded-[20px] bg-white"
      />
    </div>
  );
};

export default memo(CustomSearch);
