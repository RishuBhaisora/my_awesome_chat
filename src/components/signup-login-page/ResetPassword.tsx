import { memo, useState, useEffect, FC } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../../shared-resources/components/FieldComp";
import { useDispatch } from "react-redux";
import { EyeInvisibleTwoTone, EyeTwoTone } from "@ant-design/icons";
import {
  resetPasswordAction,
  removeAuthToast,
} from "../../redux/actions/authActions";
import { useSelector } from "react-redux";
import {
  resetPasswordEmailSelector,
  resetPasswordErrorSelector,
  resetPasswordSuccessSelector,
  resetPasswordLoadingSelector,
} from "../../redux/selectors/authSelectors";
import { toastService } from "../../services/ToastService";
import { useNavigate } from "react-router";
import Loader from "../../shared-resources/components/Loader";

const ResetPassword: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const loading = useSelector(resetPasswordLoadingSelector);
  const message = useSelector(resetPasswordSuccessSelector);
  const error = useSelector(resetPasswordErrorSelector);
  const email = useSelector(resetPasswordEmailSelector);

  let navigate = useNavigate();
  const ResetPasswordSchema = Yup.object().shape({
    newPassword: Yup.string()
      .min(8, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Required"),
  });
  const dispatch = useDispatch();

  const handleSubmit = (values: {
    email: string;
    newPassword: string;
    otp: string;
  }) => {
    dispatch(resetPasswordAction(values));
  };

  useEffect(() => {
    if (message) {
      toastService.showSuccess(message);
      setTimeout(() => {
        dispatch(removeAuthToast(true));
        navigate("/login");
      }, 1000);
    }
  }, [message]);

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
    <Formik
      initialValues={{
        email: email ?? "",
        otp: "",
        newPassword: "",
        confirmPassword: "",
      }}
      validationSchema={ResetPasswordSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {() => (
        <Form>
          <div>
            <h1 className="font-bold text-xl text-center text-[#89939c]">
              Reset password
            </h1>

            <Input label="otp" type="otp" name="otp" placeholder="OTP" />

            <Input
              label="newPassword"
              type={showPassword ? "text" : "password"}
              name="newPassword"
              placeholder="new Password"
              endIcon={showPassword ? EyeInvisibleTwoTone : EyeTwoTone}
              onEndIconClick={() => {
                setShowPassword(!showPassword);
              }}
            />
            <span className="p-1" />
            <ErrorMessage name="newPassword" />
            <Input
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              endIcon={showConfirmPassword ? EyeInvisibleTwoTone : EyeTwoTone}
              onEndIconClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}
            />
            <span className="p-1" />
            <ErrorMessage name="confirmPassword" />
            <div className="flex flex-col ">
              <button
                style={{ color: "white", backgroundColor: "#1669f7" }}
                className="text-white p-2 rounded-md w-full text-center"
                type="submit"
              >
                Reset password
              </button>

              <button
                type="button"
                className=" text-blue-400 p-2 rounded-md text-center"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default memo(ResetPassword);
