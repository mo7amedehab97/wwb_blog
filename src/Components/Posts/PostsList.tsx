import { FunctionComponent, useEffect, useContext } from "react";
import { PostsContext } from "../../Context/PostContext";
import Spinner from "../Spinner/Spinner";
import "./index.css";
import PostComp from "./PostComp";

const PostList: FunctionComponent = () => {
  const { fetchPosts, posts, isLoading } = useContext(PostsContext);
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  console.log(posts);

  return (
    <section className="post_list_container">
      <div className="post_list_tilte">
        <h2>news feed</h2>
        <h2>Posts Number: {posts?.length}</h2>
      </div>
      <div className="post_list_holder">
        {isLoading ? (
          <Spinner />
        ) : (
          posts?.map(({ title, body, id }) => {
            return <PostComp title={title} body={body} key={id} id={id} />;
          })
        )}
      </div>
    </section>
  );
};

export default PostList;
