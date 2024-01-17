import { memo, FC, useEffect } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../../shared-resources/components/FieldComp";
import { useDispatch, useSelector } from "react-redux";
import { toastService } from "../../services/ToastService";
import {
  resetPasswordErrorSelector,
  resetPasswordSuccessSelector,
  resetPasswordLoadingSelector,
} from "../../redux/selectors/authSelectors";
import { useNavigate } from "react-router-dom";
import Loader from "../../shared-resources/components/Loader";
import {
  getPasswordResetOtpAction,
  removeAuthToast,
} from "../../redux/actions/authActions";

const ForgotPassword: FC = () => {
  const message = useSelector(resetPasswordSuccessSelector);
  const error = useSelector(resetPasswordErrorSelector);
  let loading = useSelector(resetPasswordLoadingSelector);
  let navigate = useNavigate();

  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });
  let dispatch = useDispatch();

  const handleSubmit = (values: { email: string }) => {
    dispatch(getPasswordResetOtpAction(values));
  };

  useEffect(() => {
    if (message) {
      toastService.showSuccess(message);
      setTimeout(() => {
        dispatch(removeAuthToast());
        navigate("/resetPassword");
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
        email: "",
      }}
      validationSchema={ForgotPasswordSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {() => (
        <Form>
          <div className="">
            <h1 className="flex justify-center text-[#5b5b5b] mb-10 font-bold text-4xl ">
              Forgot Password
            </h1>
            <h1 className="font-bold text-lg text-center text-[#89939c]">
              Plaese enter the email address associated with your account and we
              will email you a otp to reset your password
            </h1>
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Email address"
            />

            <span className="p-1" />

            <div className="flex  mt-3 flex-col">
              <button
                style={{ color: "white", backgroundColor: "#1669f7" }}
                className="text-white p-2 rounded-md"
                type="submit"
              >
                Send request
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

export default memo(ForgotPassword);
