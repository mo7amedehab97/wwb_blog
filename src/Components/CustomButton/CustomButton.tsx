import { Dispatch, FunctionComponent, SetStateAction, useContext } from "react";
import { PostsContext } from "../../Context/PostContext";
import { IPosts } from "../../Context/PostContext";
import { ILog } from "../Modal/Modal";
import "./index.css";
interface CustomButtonProps {
  buttonName: string;
  obj: IPosts;
  setIsOpen: (value: boolean) => void;
  loginData: ILog;
  setLoginData: Dispatch<SetStateAction<ILog>>;
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  buttonName,
  obj,
  setIsOpen,
  loginData,
}) => {
  const { addPost } = useContext(PostsContext);
  const handleAddPost = (obj: IPosts) => {
    if (obj.title === "" || obj.body === "") {
      alert("you fill all the requierd inputs please");
    } else {
      addPost(obj);
      setIsOpen(false);
    }
  };
  const handleLogin = (obj: ILog) => {
    const logged = localStorage.getItem("userId");
    if (logged) {
    } else {
      if (obj.name === "" || obj.password.length === 0) {
        alert("please fill all the required inputs");
      } else {
        localStorage.setItem("userId", JSON.stringify(obj.userId));
        setIsOpen(false);
      }
    }
  };

  return (
    <button
      onClick={() => {
        buttonName === "Login" ? handleLogin(loginData) : handleAddPost(obj);
      }}
      className="custom_input_element"
    >
      {buttonName}
    </button>
  );
};

export default CustomButton;
