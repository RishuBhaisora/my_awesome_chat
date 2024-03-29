import { ErrorMessage, Form, Formik } from "formik";
import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import Input from "../../shared-resources/components/FieldComp";
import { removeAuthToast, signupAction } from "../../redux/actions/authActions";
import { EyeInvisibleTwoTone, EyeTwoTone } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  signupErrorSelector,
  signupLoadingSelector,
  signupMessageSelector,
} from "../../redux/selectors/authSelectors";
import Loader from "../../shared-resources/components/Loader";
import { toastService } from "../../services/ToastService";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const signupMessage = useSelector(signupMessageSelector);
  const signupError = useSelector(signupErrorSelector);
  const signUpLoading = useSelector(signupLoadingSelector);

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
    confirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = (values: {
    email: string;
    password: string;
    name: string;
    confirm: string;
  }) => {
    dispatch(signupAction(values));
  };

  let navigate = useNavigate();

  useEffect(() => {
    if (signupMessage) {
      toastService.showSuccess(signupMessage);
      setTimeout(() => {
        dispatch(removeAuthToast());
        navigate("/user");
      }, 1000);
    }
  }, [signupMessage]);

  useEffect(() => {
    if (signupError) {
      toastService.showError(signupError);
      setTimeout(() => {
        dispatch(removeAuthToast());
      }, 1000);
    }
  }, [signupError]);
  
  if (signUpLoading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <Loader />
      </div>
    );
  }

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
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(props) => {
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
                <Input
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirm"
                  placeholder="Confirm Password"
                  endIcon={
                    showConfirmPassword ? EyeInvisibleTwoTone : EyeTwoTone
                  }
                  onEndIconClick={() => {
                    setShowConfirmPassword(!showConfirmPassword);
                  }}
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
                  {signUpLoading ? "Loading..." : "Submit"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default memo(SignUpPage);
