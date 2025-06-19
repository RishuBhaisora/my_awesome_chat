import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import {
  LOGIN,
  SIGNUP,
  RESET_PASSWORD,
  GET_RESET_PASSWORD_OTP,
} from "../actions/actionConstants";
import {
  LoginAction,
  SignupAction,
  ResetPasswordOtpPayload,
  ResetPasswordPayload 
} from "../../modals/authModals";
import {
  loginCompletedAction,
  loginErrorAction,
  signupCompletedAction,
  signupErrorAction,
  resetPasswordSuccessAction,
  resetPasswordErrorAction,
} from "../actions/authActions";
import { authService } from "../../services/AuthServices";
import { getErrorMessage,getSignupErrorMessage } from "../../utils/reduxUtils";
import { getNotificationsAction } from "../actions/notificationsAction";

export function* loginSaga(action: {
  type: "LOGIN";
  payload: LoginAction;
}): any {
  try {
    const { data } = yield call(authService.login, action.payload);
    localStorage.setItem("token", data.token);
    yield put(loginCompletedAction(data));
    yield put(getNotificationsAction());
  } catch (e: any) {
    const error = getErrorMessage(e)
    console.warn(error)
    yield put(loginErrorAction(error));
  }
}

export function* signupSaga(action: {
  type: "SIGNUP";
  payload: SignupAction;
}): any {
  try {
    const { data } = yield call(authService.signup, action.payload);
    yield put(signupCompletedAction(data));
  } catch (e: any) {
    const error = getSignupErrorMessage(e)
    console.warn(error)
    yield put(signupErrorAction(error));
  }
}

export function* forgetPasswordSaga(action: {
  type: "GET_RESET_PASSWORD_OTP";
  payload: ResetPasswordOtpPayload;
}): any {
  try {
    const { data } = yield call(authService.forgetPassword, action.payload);
    yield put(resetPasswordSuccessAction(data.message));
  } catch (e: any) {
    const error = getErrorMessage(e)
    console.warn(error)
    yield put(resetPasswordErrorAction(error))
  }
}

export function* resetPasswordSaga(action: {
  type: "RESET_PASSWORD";
  payload: ResetPasswordPayload;
}): any {
  try {
    const { data } = yield call(authService.resetPassword, action.payload);
    yield put(resetPasswordSuccessAction(data.message));
  } catch (e: any) {
    const error = getErrorMessage(e)
    console.warn(error)
    yield put(resetPasswordErrorAction(error))
  }
}

export function* authSaga() {
  yield all([takeLatest(SIGNUP, signupSaga)]);
  yield all([takeLatest(LOGIN, loginSaga)]);
  yield all([takeLatest(GET_RESET_PASSWORD_OTP, forgetPasswordSaga)]);
  yield all([takeLatest(RESET_PASSWORD, resetPasswordSaga)]);
}
