import React from "react";
import { useGetPostQuery } from "../redux/features/baseAPI";
import { Link } from "react-router-dom";

const Posts = () => {
  const { data, isLoading } = useGetPostQuery();
  // console.log(data);
  return (
    <div>
      {isLoading ? (
        <p>Loading.....</p>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold my-5">
            All Post: {data?.length}
          </h2>
          {data?.map((post) => (
            <div
              key={post?.id}
              className="bg-blue-400 text-white my-2 py-4 px-2 rounded-md"
            >
              <Link to={`/post/${post.id}`}>
                <h2 className="text-2xl font-medium">{post?.title}</h2>
                <p>{post?.body}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
