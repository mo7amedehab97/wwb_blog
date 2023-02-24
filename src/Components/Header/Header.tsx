import { FunctionComponent, useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import "./index.css";

const Header: FunctionComponent = () => {
  const [isLogged, setIsLogged] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [nameModal, setModalName] = useState("");
  // useEffect(() => {
  //   return setIsLogged(false);
  // }, []);

  const Login = () => {
    setIsOpen(true);
    setModalName("Login");
  };

  const AddPost = () => {
    setIsOpen(true);
    setModalName("AddPost");
  };
  return (
    <nav>
      <h2>WWB Blog</h2>
      {isLogged ? (
        <button className="add_post_btn" onClick={AddPost}>
          {" "}
          Add Post{" "}
        </button>
      ) : (
        <button className="login_btn" onClick={Login}>
          Log In
        </button>
      )}
      {isOpen ? (
        <Modal modalName={nameModal} isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : null}
    </nav>
  );
};

export default Header;
