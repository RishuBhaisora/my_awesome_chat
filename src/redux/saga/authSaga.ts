import { all, call, takeLatest, put } from "@redux-saga/core/effects";
import { LOGIN, SIGNUP } from "../actions/actionConstants";
import { LoginAction, SignupAction } from "../../modals/authModals";
import {
  signupCompletedAction,
  signupErrorAction,
} from "../actions/authActions";
import { authService } from "../../services/AuthService";


export function* loginSaga(action: {
  type: "LOGIN";
  payload: LoginAction;
}): any {
  
}

export function* signupSaga(action: {
  type: "SIGNUP";
  payload: SignupAction;
}): any {
  try {
    const { data } = yield call(authService.signup, action.payload);
    yield put(signupCompletedAction(data));
  } catch (error) {
    yield put(signupErrorAction(error));
  }
}

export function* authSaga() {
  yield all([takeLatest(SIGNUP, signupSaga)]);
  yield all([takeLatest(LOGIN, loginSaga)]);
}
