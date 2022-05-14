import { addAllPost, selectPost } from "../public/src/features/postSlice";
import { useDispatch, useSelector } from "react-redux";

import Post from "../components/Post";
import React from "react";
import axios from "axios";
import { useEffect } from "react";

const Posts = () => {
  const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post";
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  useEffect(() => {
    const fetchData = () => {
      const response = axios.get(FACEBOOK_CLONE_ENDPOINT).then((response) => {
        dispatch(addAllPost(response.data));
      });
    };

    fetchData();
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
