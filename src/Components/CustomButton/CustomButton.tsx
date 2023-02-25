import { FunctionComponent } from "react";
import "./index.css";
interface CustomButtonProps {
  buttonName: string;
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({ buttonName }) => {
  return (
    <button
      onClick={() => {
        buttonName === "Login" ? console.log("first") : console.log("seconed");
      }}
      className="custom_input_element"
    >
      {buttonName}
    </button>
  );
};

export default CustomButton;
