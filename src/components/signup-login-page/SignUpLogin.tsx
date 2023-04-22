import { memo, useEffect, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Button from "../../shared-resources/avatar/Button";

const SignUpLogin = () => {
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate("/login" + location.search);
  }, []);

  const loginClicked = useMemo(() => {
    if (location.pathname === "/login") return true;
    else return false;
  }, [location]);
  const signUpClicked = useMemo(() => {
    if (location.pathname === "/signUp") return true;
    else return false;
  }, [location]);

  return (
    <div className="flex md:items-center justify-center p-2 bg-slate-400 md:p-0  flex-col min-h-screen max-h-[200vh]">
      <div className=" md:w-1/3  pb-2 rounded-md">
        <Button
          text="LogIn"
          clicked={loginClicked}
          onClick={() => navigate("/login" + location.search)}
        />
        <Button
          text="SignUp"
          clicked={signUpClicked}
          onClick={() => navigate("/signUp" + location.search)}
        />
      </div>
      <div className="bg-white p-2 h-[85vh] md:w-1/3 w-full rounded-md overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default memo(SignUpLogin);
