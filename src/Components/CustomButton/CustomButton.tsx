import { FunctionComponent, useContext } from "react";
import { PostsContext } from "../../Context/PostContext";
import { IPosts } from "../../Context/PostContext";
import "./index.css";
interface CustomButtonProps {
  buttonName: string;
  obj: IPosts;
  setIsOpen: (value: boolean) => void;
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  buttonName,
  obj,
  setIsOpen,
}) => {
  const { addPost } = useContext(PostsContext);
  const handleAddPost = (obj: IPosts) => {
    if (obj.title === "" || obj.body === "") {
      alert("you fill all the requierd inputs please");
    } else {
      addPost(obj);
      setIsOpen(false);
      console.log("one tow three ");
    }
  };
  return (
    <button
      onClick={() => {
        buttonName === "Login" ? handleAddPost(obj) : handleAddPost(obj);
      }}
      className="custom_input_element"
    >
      {buttonName}
    </button>
  );
};

export default CustomButton;
