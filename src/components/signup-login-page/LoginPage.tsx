import { ErrorMessage, Form, Formik } from "formik";
import { memo, useState, useEffect } from "react";
import * as Yup from "yup";
import Input from "../../shared-resources/components/FieldComp";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, removeAuthToast } from "../../redux/actions/authActions";
import { useNavigate } from "react-router";
import {
  loginErrorSelector,
  loginLoadingSelector,
} from "../../redux/selectors/authSelectors";
import Loader from "../../shared-resources/components/Loader";

import { toastService } from "../../services/ToastService";

import { EyeInvisibleTwoTone, EyeTwoTone } from "@ant-design/icons";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();

  const error = useSelector(loginErrorSelector);
  const loading = useSelector(loginLoadingSelector);
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });
  const handleSubmit = (values: { email: string; password: string }) => {
    dispatch(loginAction(values));
  };

  useEffect(() => {
    if (error) {
      toastService.showError(error);
      setTimeout(() => {
        dispatch(removeAuthToast());
      }, 1000);
    }
  }, [error]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <h1 className="flex justify-center text-[#2167f4] mb-10 font-bold text-4xl">
        LOGIN
      </h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(props) => {
          return (
            <Form>
              <div>
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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  endIcon={showPassword ? EyeInvisibleTwoTone : EyeTwoTone}
                  onEndIconClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
                <span className="p-1" />
                <ErrorMessage name="password" />
                <div className="w-full flex justify-end items-center ">
                  <button
                    type="button"
                    className="text-cyan-600 text-right cursor-pointer "
                    onClick={() => navigate("/forgetPassword")}
                  >
                    Forgot Password
                  </button>
                </div>
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
    </>
  );
};

export default memo(LoginPage);
