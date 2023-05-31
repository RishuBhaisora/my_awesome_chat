import { Field } from "formik";
import { FC, memo } from "react";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  endIcon?: any;
  onEndIconClick?: () => void;
};

const FieldComp: FC<InputProps> = (props) => {
  const { onEndIconClick, endIcon, label, type, placeholder, name } = props;
  const EndIcon = endIcon;
  return (
    <div className="relative">
      <h1 className="p-2 text-md font-bold">{label}</h1>

      <Field
        className="w-full border-2 p-2 focus:outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete="none"
      />
      {EndIcon && (
        <EndIcon
          onClick={onEndIconClick}
          className="absolute top-[65%] left-[90%]"
        />
      )}
    </div>
  );
};

export default memo(FieldComp);
