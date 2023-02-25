import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import usePostsContextValue from "./Context/PostContext";
import { PostsContext } from "./Context/PostContext";
const App: React.FunctionComponent = () => {
  const postsContextValue = usePostsContextValue();

  return (
    <PostsContext.Provider value={postsContextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </PostsContext.Provider>
  );
};

export default App;
