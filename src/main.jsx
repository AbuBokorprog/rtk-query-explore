import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./redux/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostCard from "./components/postCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
  {
    path: "/post/:id",
    element: <PostCard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container mx-auto px-20">
      <Provider store={Store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  </React.StrictMode>
);
