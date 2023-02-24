import './index.css'
const index = () => {
  return (
    <section className="add_post_container">
      <textarea name="POST" id="post" cols={50} rows={3}></textarea>
      <button>Add post</button>
    </section>
  );
};

export default index;
