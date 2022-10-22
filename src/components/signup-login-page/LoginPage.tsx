import { ErrorMessage, Form, Formik } from "formik";
import { FC, memo } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import Input from "../../shared-resources/FieldComp";

type LoginPageProps = {};

const LoginPage: FC<LoginPageProps> = (props) => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
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
        LOGIN
      </h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
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
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <span className="p-1" />
                <ErrorMessage name="email" />
                <Input
                  label="Pasword"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <span className="p-1" />
                <ErrorMessage name="password" />
                <h1 className="text-cyan-600 text-right cursor-pointer">
                  Forgot Password
                </h1>
              </div>
              <div className="flex justify-center pt-4">
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

LoginPage.defaultProps = {};

export default memo(LoginPage);
