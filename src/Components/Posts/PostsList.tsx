import { FunctionComponent, useState, useEffect } from "react";
import "./index.css";
import PostComp from "./PostComp";

const PostList: FunctionComponent = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  console.log(posts);

  return (
    <section className="post_list_container">
      <div className="post_list_tilte">
        <h2>news feed</h2>
      </div>
      <div className="post_list_holder">
        {posts.map(({ title, body, id }) => {
          return <PostComp title={title} body={body} key={id} />;
        })}
      </div>
    </section>
  );
};

export default PostList;
