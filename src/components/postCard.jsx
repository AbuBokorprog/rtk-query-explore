import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../redux/features/baseAPI";

const PostCard = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPostByIdQuery(id);
  return (
    <>
      {isLoading ? (
        <p>Loading ....</p>
      ) : (
        <div className="bg-blue-400 text-white my-2 py-4 px-2 rounded-md">
          <div>
            <h2 className="text-4xl font-semibold">{data?.title}</h2>
            <p>{data?.body}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PostCard;
