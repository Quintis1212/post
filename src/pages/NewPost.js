import React from "react";
import axios from "../axios";
import { useDispatch } from "react-redux";
import PostForm from "../components/PostForm";

export default function NewPost() {
  const dispatch = useDispatch();

  const postHandler = (title, body) => {
    const data = { title, body };
    axios.post("/posts", data).then((res) => {
      alert("Item published , check home page for new item :)");
      const tempId = Math.floor(Math.random() * 1000);
      // adding post without request to server
      dispatch({ type: "ADD_POST", post: { ...data, id: tempId } });
    });
  };
  return <PostForm onClick={postHandler} />;
}
