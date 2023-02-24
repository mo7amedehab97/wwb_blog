import { FunctionComponent } from "react";
import Trash from "../../assets/trash-svgrepo-com.svg";
import Edit from "../../assets/edit-3-svgrepo-com.svg";
interface PostCompProps {
  title: String;
  body: String;
}

const PostComp: FunctionComponent<PostCompProps> = ({ title, body }) => {
  return (
    <section className="post_comp_container">
      <div className="post_manipulate_section">
        <div className="post_icons_title">
          <h3>{title}</h3>
        </div>
        <div className="post_icons">
          <img src={Trash} alt="" />
          <img src={Edit} alt="" />
        </div>
      </div>
      <p>{body}</p>
    </section>
  );
};

export default PostComp;
