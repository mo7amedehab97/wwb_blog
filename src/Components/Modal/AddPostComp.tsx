import { FunctionComponent, Dispatch, SetStateAction } from "react";
import CustomInput from "../CustomInput/CustomInput";
import { ILog } from "./Modal";

interface AddPostCompProps {
  setLoginData: Dispatch<SetStateAction<ILog>>;
  loginData: ILog;
}

const AddPostComp: FunctionComponent<AddPostCompProps> = ({
  loginData,
  setLoginData,
}) => {
  return (
    <div className="inputs_holder">
      <CustomInput
        inputValue={"title"}
        placeholderValue={"Title"}
        inputType={"text"}
        changeFunction={(e: any) => {
          setLoginData({ ...loginData, name: e.target.value });
        }}
      />
      <CustomInput
        inputValue={"body"}
        placeholderValue={"body"}
        inputType={"text"}
        changeFunction={(e: any) => {
          setLoginData({ ...loginData, name: e.target.value });
        }}
      />
    </div>
  );
};

export default AddPostComp;
