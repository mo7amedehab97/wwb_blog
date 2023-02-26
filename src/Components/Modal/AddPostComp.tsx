import { FunctionComponent, Dispatch, SetStateAction } from "react";
import CustomInput from "../CustomInput/CustomInput";
import { IPosts } from "../../Context/PostContext";
interface AddPostCompProps {
  setObj: Dispatch<SetStateAction<IPosts>>;
  obj: IPosts;
}

const AddPostComp: FunctionComponent<AddPostCompProps> = ({ setObj, obj }) => {
  return (
    <div className="inputs_holder">
      <CustomInput
        inputValue={"title"}
        placeholderValue={"Title"}
        inputType={"text"}
        changeFunction={(e: any) => {
          setObj({ ...obj, title: e.target.value });
        }}
      />
      <CustomInput
        inputValue={"body"}
        placeholderValue={"body"}
        inputType={"text"}
        changeFunction={(e: any) => {
          setObj({ ...obj, body: e.target.value });
        }}
      />
    </div>
  );
};

export default AddPostComp;
