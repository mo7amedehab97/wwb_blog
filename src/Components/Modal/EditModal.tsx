import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useContext,
  useState,
} from "react";
import "./Index.css";
import Cancel from "../../assets/Cancel.svg";
import { IPosts, PostsContext } from "../../Context/PostContext";
interface EditModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  postId: number;
  userId: number;
  Title: string;
  Body: string;
}

const EditModal: FunctionComponent<EditModalProps> = ({
  setIsOpen,
  postId,
  userId,
  Title,
  Body,
}) => {
  const [editObj, setEditObj] = useState<IPosts>({
    userId: userId,
    id: postId,
    title: "",
    body: "",
  });
  const { updatePost } = useContext(PostsContext);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="modal_container">
      <div className="modal_innder_container">
        <div className="modal_header">
          <h3>EDIT</h3>
          <button>
            <img src={Cancel} alt="" onClick={closeModal} />
          </button>
        </div>
        <div className="modal_body">
          <div className="custom_input_holder">
            <label htmlFor="title">title</label>
            <input
              type="text"
              name="title"
              onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                setEditObj({
                  ...editObj,
                  title: Title || e.currentTarget.value,
                })
              }
              defaultValue={Title}
            />
          </div>
          <div className="custom_input_holder">
            <label htmlFor="body">body</label>
            <input
              type="text"
              name="body"
              defaultValue={Body}
              onChange={(e: React.FormEvent<HTMLInputElement>): void =>
                setEditObj({ ...editObj, body: e.currentTarget.value || Body })
              }
            />
          </div>
        </div>
        <div className="modal_footer">
          <button
            onClick={() => {
              editObj.title === "" || editObj.body === ""
                ? alert("please fill all the requierd inputs")
                : updatePost(postId, editObj);
            }}
            className="custom_input_element"
          >
            Edit Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
