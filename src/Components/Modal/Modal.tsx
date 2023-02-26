import { FunctionComponent, useState } from "react";
import "./Index.css";
import Cancel from "../../assets/Cancel.svg";
import LoginComp from "./LoginComp";
import AddPostComp from "./AddPostComp";
import CustomButton from "../CustomButton/CustomButton";
import { IPosts } from "../../Context/PostContext";
interface ModalProps {
  modalName: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export interface ILog {
  userId: number;
  name: string;
  password: string;
}

const Modal: FunctionComponent<ModalProps> = ({
  modalName,
  isOpen,
  setIsOpen,
}) => {
  const [loginData, setLoginData] = useState<ILog>({
    userId: 0,
    name: "",
    password: "",
  });
  const [obj, setObj] = useState<IPosts>({
    userId: 134754334,
    title: "",
    body: "",
    id: 0,
  });
  const CloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="modal_container">
      <div className="modal_innder_container">
        <div className="modal_header">
          <h3>{modalName}</h3>
          <button onClick={CloseModal}>
            <img src={Cancel} alt="" />
          </button>
        </div>
        <div className="modal_body">
          {modalName === "Login" ? (
            <LoginComp loginData={loginData} setLoginData={setLoginData} />
          ) : (
            <AddPostComp obj={obj} setObj={setObj} />
          )}
        </div>
        <div className="modal_footer">
          <CustomButton
            buttonName={modalName}
            obj={obj}
            setIsOpen={setIsOpen}
            loginData={loginData}
            setLoginData={setLoginData}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
