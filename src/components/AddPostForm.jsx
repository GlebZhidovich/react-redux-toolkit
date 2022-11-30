import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postAdded } from "../store/features/posts/postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setPost((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { title, content } = post;
    dispatch(postAdded(title, content));
  };

  return (
    <section className="p-10 w-full max-w-xs">
      <h2 className="block text-gray-700 text-xl font-bold mb-2">
        Add a New Post
      </h2>
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            value={post.title}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            onChange={onChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <input
            value={post.content}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            name="content"
            type="text"
            placeholder="Content"
            onChange={onChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddPostForm;
