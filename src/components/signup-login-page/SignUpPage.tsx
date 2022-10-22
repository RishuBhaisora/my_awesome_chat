import { ErrorMessage, Form, Formik } from "formik";
import { FC, memo } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import Input from "../../shared-resources/FieldComp";
type SignUpPageProps = {};

const SignUpPage: FC<SignUpPageProps> = (props) => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
    confirm: Yup.string()
      .min(8, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });
  const handleSubmit = (
    values: { email: string; password: string },
    action: any
  ) => {
    console.log(values, action);
    action.resetForm();
    navigate("/user");
  };

  let navigate = useNavigate();

  return (
    <div className=" ">
      <h1 className="flex justify-center text-[#2167f4] mb-10 font-bold text-4xl">
        SIGNUP
      </h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirm: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, action) => {
          handleSubmit(values, action);
        }}
      >
        {(props) => {
          {
            // console.log(props);
          }

          return (
            <Form>
              <div className="">
                <Input
                  label="Name"
                  type="name"
                  name="name"
                  placeholder="Name"
                />
                <span className="p-1" />
                <ErrorMessage name="name" />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <span className="p-1" />
                <ErrorMessage name="email" />
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <span className="p-1" />
                <ErrorMessage name="password" />
                <Input
                  label="Confirm Password"
                  type="password"
                  name="confirm"
                  placeholder="Confirm Password"
                />
                <span className="p-1" />
                <ErrorMessage name="confirm" />
              </div>
              <div className="flex justify-center p-8">
                <button
                  disabled={!props.isValid}
                  className="rounded-md p-2 px-3 text-white bg-[#2167f4] font-bold  "
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
SignUpPage.defaultProps = {};

export default memo(SignUpPage);
