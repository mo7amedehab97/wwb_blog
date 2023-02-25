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
}

export const postsContextDefaultValue: PostsContextData = {
  posts: [],
  isLoading: false,
  fetchPosts: () => null,
  removePost: () => null,
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

  return useMemo(
    () => ({
      posts,
      isLoading,
      fetchPosts,
      removePost,
    }),
    [posts, isLoading, fetchPosts, removePost]
  );
}
export default usePostsContextValue;
