import { Field } from "formik";
import { FC, memo } from "react";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  label: string;
};

const FieldComp: FC<InputProps> = (props) => {
  return (
    <div className=" ">
      <h1 className="p-2 text-md font-bold">{props.label}</h1>

      <Field className="w-full border-2 p-2 focus:outline-none" {...props} />
    </div>
  );
};

FieldComp.defaultProps = {};

export default memo(FieldComp);
