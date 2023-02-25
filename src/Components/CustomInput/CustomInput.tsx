import { FunctionComponent, HTMLInputTypeAttribute } from "react";
import "./index.css";
interface CustomInputProps {
  inputValue: string;
  inputType: HTMLInputTypeAttribute | undefined;
  placeholderValue: string;

  changeFunction: any;
}

const CustomInput: FunctionComponent<CustomInputProps> = ({
  inputValue,
  placeholderValue,
  inputType,
  changeFunction,
}) => {
  return (
    <div className="custom_input_holder">
      <label htmlFor={inputValue}> {inputValue}</label>
      <input
        type={inputType}
        placeholder={placeholderValue}
        onChange={changeFunction}
      />
    </div>
  );
};

export default CustomInput;
