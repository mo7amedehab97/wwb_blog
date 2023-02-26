import { FunctionComponent, useContext } from "react";
import Trash from "../../assets/trash-svgrepo-com.svg";
import Edit from "../../assets/edit-3-svgrepo-com.svg";
import { PostsContext } from "../../Context/PostContext";
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
  const { removePost } = useContext(PostsContext);
  const ID: number = Number(localStorage.getItem("userId"));
  return (
    <section className="post_comp_container">
      <div className="post_manipulate_section">
        <div className="post_icons_title">
          <h3>{title}</h3>
        </div>
        <div className="post_icons">
          <button
            onClick={() => {
              ID === userId
                ? removePost(id)
                : alert("you cant delete post never belong to you");
            }}
          >
            <img src={Trash} alt="" />
          </button>
          <img src={Edit} alt="" />
        </div>
      </div>
      <p>{body}</p>
    </section>
  );
};

export default PostComp;
