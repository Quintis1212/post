import React from "react";
import PostPreview from "../components/PostPreview";
import { useSelector } from "react-redux";

export default function PostList() {
  const content = useSelector((state) => state.content);
  return (
    <div>
      {(content || []).map(({ id, title, body }) => {
        return <PostPreview key={id} title={title} body={body} id={id} />;
      })}
    </div>
  );
}
