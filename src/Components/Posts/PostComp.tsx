import { FunctionComponent, useContext, useState } from "react";
import Trash from "../../assets/trash-svgrepo-com.svg";
import Edit from "../../assets/edit-3-svgrepo-com.svg";
import { PostsContext } from "../../Context/PostContext";
import EditModal from "../Modal/EditModal";
interface PostCompProps {
  title: string;
  body: string;
  id: number;
  userId: number;
}

const PostComp: FunctionComponent<PostCompProps> = ({
  title,
  body,
  id,
  userId,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { removePost } = useContext(PostsContext);
  const ID: number = Number(localStorage.getItem("userId"));
  const editPost = () => {
    setIsOpen(true);
  };
  return (
    <section className="post_comp_container">
      <div className="post_manipulate_section">
        <div className="post_icons_title">
          <h3>{title}</h3>
        </div>
        <div className="post_icons">
          {ID === userId && (
            <>
              <button
                onClick={() => {
                  ID === userId
                    ? removePost(id)
                    : alert("you cant delete post never belong to you");
                }}
              >
                <img src={Trash} alt="" />
              </button>
              <button
                onClick={() => {
                  editPost();
                }}
              >
                <img src={Edit} alt="" />
              </button>
            </>
          )}
          {isOpen ? (
            <EditModal
              setIsOpen={setIsOpen}
              postId={id}
              userId={ID}
              Title={title}
              Body={body}
            />
          ) : null}
        </div>
      </div>
      <p>{body}</p>
    </section>
  );
};

export default PostComp;
