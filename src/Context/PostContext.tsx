import { useState, useCallback, createContext, useMemo } from "react";

export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsContextData {
  posts: IPosts[];
  isLoading: boolean;
  fetchPosts: () => void;
  removePost: (postId: number) => void;
  addPost: (value: IPosts) => void;
  updatePost: (postId: number, obj: IPosts) => void;
}

export const postsContextDefaultValue: PostsContextData = {
  posts: [],
  isLoading: false,
  fetchPosts: () => null,
  removePost: () => null,
  addPost: () => null,
  updatePost: () => null,
};

export const PostsContext = createContext<PostsContextData>(
  postsContextDefaultValue
);

function usePostsContextValue(): PostsContextData {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = useCallback(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((fetchedPosts) => {
        setPosts(fetchedPosts);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setPosts]);

  const removePost = useCallback(
    (postId: number) => {
      setIsLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE",
      })
        .then(() => {
          const newPosts = [...posts];
          const removedPostIndex = newPosts.findIndex(
            (post) => post.id === postId
          );
          if (removedPostIndex > -1) {
            newPosts.splice(removedPostIndex, 1);
          }
          setPosts(newPosts);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [setPosts, posts]
  );
  const addPost = useCallback(
    (obj: IPosts) => {
      setIsLoading(true);
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          ...obj,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => setPosts([json, ...posts]))
        .finally(() => {
          setIsLoading(false);
        });
    },
    [posts]
  );

  const updatePost = useCallback((id: number, obj: IPosts) => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: obj.title,
        body: obj.body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("item fetched");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return useMemo(
    () => ({
      posts,
      isLoading,
      fetchPosts,
      removePost,
      addPost,
      updatePost,
    }),
    [posts, isLoading, fetchPosts, removePost, addPost, updatePost]
  );
}
export default usePostsContextValue;
