import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";
import React from "react";

const Feed = () => {
  return (
    <div className="flex-grow h-screen pt-6 mr-6 overflow-y-auto no-scrollbar">
      <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
        {/*Create Post Box*/}
        <CreatePost />
        {/*Post*/}
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
