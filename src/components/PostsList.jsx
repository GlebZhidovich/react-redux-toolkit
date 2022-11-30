import { useDispatch, useSelector } from "react-redux";
import {
  postRemoved,
  selectAllPosts,
} from "../store/features/posts/postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();

  const removePost = (id) => {
    dispatch(postRemoved(id));
  };

  const renderedPosts = posts.map((post) => (
    <ul key={post.id} className="max-w-sm rounded overflow-hidden shadow-lg">
      <article className="px-6 py-4 bg-white">
        <h3 className="font-bold text-xl mb-2">{post.title}</h3>
        <p className="pb-3 text-gray-700 text-base">{post.content}</p>
        <button
          onClick={() => removePost(post.id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Remove
        </button>
      </article>
    </ul>
  ));

  return (
    <section>
      <h2 className="px-10 text-3xl font-bold underline">Posts</h2>
      <li className="p-10 flex flex-col gap-3">{renderedPosts}</li>
    </section>
  );
};

export default PostsList;
