import React from "react";
import Posts from "./components/posts";

const App = () => {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-center">Feed</h2>
      <Posts />
    </div>
  );
};

export default App;
