import { Field } from "formik";
import { FC, memo } from "react";
import Button from "./avatar/Button";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  endIcon?: any;
  onEndIconClick?: () => void;
};

const FieldComp: FC<InputProps> = (props) => {
  const { onEndIconClick, endIcon, label } = props;
  const EndIcon = endIcon;
  return (
    <div className="relative">
      <h1 className="p-2 text-md font-bold">{label}</h1>

      <Field className="w-full border-2 p-2 focus:outline-none" {...props} />
      {EndIcon && (
        <button type="button" onClick={onEndIconClick}>
          <EndIcon className="absolute top-[65%] left-[90%]" />
        </button>
      )}
    </div>
  );
};

export default memo(FieldComp);
