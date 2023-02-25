import { FunctionComponent, Dispatch, SetStateAction } from "react";
import CustomInput from "../CustomInput/CustomInput";
import { ILog } from "./Modal";

interface LoginCompProps {
  setLoginData: Dispatch<SetStateAction<ILog>>;
  loginData: ILog;
}

const LoginComp: FunctionComponent<LoginCompProps> = ({
  loginData,
  setLoginData,
}) => {
  return (
    <div className="inputs_holder">
      <CustomInput
        inputValue={"name"}
        placeholderValue={"name"}
        inputType={"name"}
        changeFunction={(e: any) => {
          setLoginData({ ...loginData, name: e.target.value });
        }}
      />
      <CustomInput
        inputValue={"password"}
        placeholderValue={"password"}
        inputType={"password"}
        changeFunction={(e: any) => {
          setLoginData({ ...loginData, password: e.target.value });
        }}
      />
    </div>
  );
};

export default LoginComp;
